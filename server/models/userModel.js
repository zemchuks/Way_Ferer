import db from './index'

class UserModel {

    static find(email) {
        try {
            const { rows } = db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (rows) {
            return rows[0];
        }
        } catch (error) {
            return false;
        }
    }

    // searches the database to check if user with a given firstname exist
    static find(firstname) {
        try {
            const { rows } = db.query('SELECT * FROM users WHERE firstname = $1', [firstname]);
        if (rows) {
            return rows[0];
        }
        } catch (error) {
            return false;
        }
    }
    /**
     * Creates a New User and adds the userObject to the database
     */

     static async create(params) {
         try {
             const {
                 email, firstname, lastname, password, is_admin, 
             } = params;
             const newUser = [
                 email, firstname, lastname, password, is_admin,
             ];
             const queryText = 'INSERT INTO users (email, firstname, lastname, password, is_admin) VALUES ($1, $2, $3, $4, $5) RETURNING *';
             const { rows } = await db.query(queryText, newUser);
             if (rows) {
                 return rows[0];
             }
         } catch (error) {
             return false;
         }
     }

  /**
   * Verifies a user
   */

   static async verify(email) {
       try{
           const value = 'verified'
           const queryText = 'UPDATE users SET status = $1 WHERE email = $2 RETURNING *';
           const { rows } = await db.query(queryText, [value, email]);
           if (rows) {
               return rows[0];
           }
       } catch (error) {
           return false;
       }
   }
}

export default UserModel;