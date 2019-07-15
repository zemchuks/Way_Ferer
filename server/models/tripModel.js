import db from './index'

/**
 * Contains the method that helps the trip controller interact with the database
 * Creates a new trip 
 */

 class TripModel {
     static async create(params) {
         try {
             const {
                 bus_id, origin, destination, trip_date, fare, status,
             } = params;
             const newTrip = [bus_id, origin, destination, trip_date, fare, status];
             const queryText = 'INSERT INTO trips (bus_id, origin, destination, trip_date, fare, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
             const { rows } = await db.query(queryText, newTrip);
             if (rows) {
                 return rows[0];
             }
         } catch (error)  {
             console.error(error);
             return false;
         }
     }
 }

 export default TripModel;