import db from '../models/index';
import createTables from './createTables';

const createDatabaseTables = () => {
    db.query(createTables, () => {
      console.log('Tables created successfully');
    });
  };
  
  createDatabaseTables();