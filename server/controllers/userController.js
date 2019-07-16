import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import UserModel from '../models/userModel';
import db from '../models/index';

dotenv.config()

class Users {
  
  static signup(req, res) {
    const {
      email, firstname, lastname, password, isAdmin
    } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const values = [
      email, 
      firstname,
      lastname,
      hashedPassword,
      isAdmin,
    ];

    const text = 'INSERT INTO users(email, firstname, lastname, password, isAdmin) VALUES($1, $2, $3, $4, $5) RETURNING *';
    
    db.query('SELECT * FROM users WHERE email = $1', [email], (err, res) => {
      if (res.rowCount !== 0) {
        return res.status(400).json({
          status: 400,
          error: 'User with this email already exists',
        })
      }
      return db.query(text, values, (err, newUser) => {
        if (err){
          return res.status(500).send({
            status: 500,
            error: 'User with this firstname already exists'
          })
        }
        const payload = {
          userid: newUser.rows[0].userid,
          email: newUser.rows[0].email,
          isAdmin: newUser.rows[0].isAdmin,
        }
        const token = jwt.sign(payload, process.env.SECRETkey, { expiresIn: 20700 })
        //to stop password from being returned
        delete newUser.rows[0].password;
        res.status(200).send({
          status: 200,
          data: [{ token, user: newUser.rows0 }]
        })
      })
    })
    
  }
    

}
export default Users;