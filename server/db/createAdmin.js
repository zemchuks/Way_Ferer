import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import db from '../models/index';

dotenv.config();

const email = process.env.ADMIN_EM;
const firstname = process.env.ADMIN_FN;
const lastname = process.env.ADMIN_LN;
const password = bcrypt.hashSync(process.env.ADMIN_PWD, 8);
const isAdmin = true;

const values = [
  email,
  firstname,
  lastname,
  password,
  isAdmin,
];

const text = 'INSERT INTO users(email, firstname, lastname, password, isAdmin) VALUES($1, $2, $3, $4, $5) RETURNING *';

const createAdmin = () => {
  db.query(text, values, () => {
    console.log('Admin Successfully Created');
  });
};

createAdmin();