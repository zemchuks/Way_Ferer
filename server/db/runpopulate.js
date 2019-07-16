import db from '../models/index';
import populate from './populateTables';

const populateTables = () => {
  db.query(populate, (err, res) => {
    if(err){
      console.log(err)
    } else {
      console.log('Tables successfully populated');
    }
  });
};

populateTables();