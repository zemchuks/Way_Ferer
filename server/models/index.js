import { Pool, Client } from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const client = new Client({
    connectionString: process.env.DATABASE_URL
});
//types.setTypeParser(1700, val => parseFloat(val));

 client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
})

/**
 * Database Query
 * @param {string} text
 * @param {array} params
 * @returns {object} object
 */

class db {
    static query(text, params, callback) {
        return client.query(text, params, callback);
    }
}
export default db;