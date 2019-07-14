import { Pool, types } from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
types.setTypeParser(1700, val => parseFloat(val));

 
    /**
     * Database Query
     * @param {string} text
     * @param {array} params
     * @returns {object} object
     */

    class db {
        static query(text, params, callback) {
          return pool.query(text, params, callback);
        }
      }
      export default db;