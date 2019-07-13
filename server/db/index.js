import { Pool, types } from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
types.setTypeParser(1700, val => parseFloat(val));

export default {
    /**
     * Database Query
     * @param {string} text
     * @param {array} params
     * @returns {object} object
     */

     query(text, params) {
         return new Promise((resolve, reject) => {
             pool.query(text, params)
             .then((res) => {
                 resolve(res);
             })
             .catch(err => {
                 reject(err);
             })
         })
     }
}