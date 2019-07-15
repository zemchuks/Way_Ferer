import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import db from '../models/index';

dotenv.config()


class users {
    static signup(req, res) {
        const {
            email, firstname, lastname, password, is_admin,
          } = req.body;
    }
}