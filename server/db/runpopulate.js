import db from '../models/index';
import populate from './populateTables';

const populateTables = () => {
  db.query(populate, () => {
    console.log('Tables successfully populated');
  });
};

populateTables();