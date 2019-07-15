import db from './index'

/**
 * Contains the method that helps the trip controller interact with the database
 * Creates a new trip 
 */

 class busModel {
     static async create(params) {
         try {
             const {
                plate_number, manufacturer, model, year, capacity,
             } = params;
             const newBus = [plate_number, manufacturer, model, year, capacity];
             const queryText = 'INSERT INTO buses (plate_number, manufacturer, model, year, capacity) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
             const { rows } = await db.query(queryText, newBus);
             if (rows) {
                 return rows[0];
             }
         } catch (error)  {
             console.error(error);
             return false;
         }
     }
 }

 export default busModel;