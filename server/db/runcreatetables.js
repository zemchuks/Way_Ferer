import db from '../models/index';
import createTables from './createTables';

const createDatabaseTables = () => {
    db.query(createTables, (err, res) => {
      if(err){
        console.log(err)
      } else {
        console.log('Tables created successfully');
      }
    });
  };
  
  createDatabaseTables();