import db from './index';

const dropTables = `
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS buses CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
`

const dropDatabase = async () => {
    await db.query(dropTables).then(() => {
        console.log('Tables removed from database')
    })
}
dropDatabase();