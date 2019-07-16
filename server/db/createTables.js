const createTables = ` 
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR NOT NULL,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    is_admin BOOLEAN
);

CREATE TABLE IF NOT EXISTS buses (
    id SERIAL PRIMARY KEY NOT NULL,
    plate_number VARCHAR NOT NULL,
    manufacturer VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    year TIMESTAMP DEFAULT NOW(),
    capacity INTEGER
);

CREATE TABLE IF NOT EXISTS trips (
    id SERIAL PRIMARY KEY,
    bus_id INTEGER NOT NULL,
    origin VARCHAR NOT NULL,
    destination VARCHAR NOT NULL,
    trip_date TIMESTAMP DEFAULT NOW(),
    fare FLOAT(2) NOT NULL,
    status VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL,
    trip_id INTEGER,
    user_id INTEGER,
    created_on TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (trip_id, user_id)
);
`;

export default createTables;