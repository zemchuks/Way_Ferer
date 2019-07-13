import db from './index';
import bcrypt from 'bcryptjs'

const password = bcrypt.hashSync('password', 8);

const populate = `
INSERT INTO users (email, firstname, lastname, password, is_admin)
VALUES ('bruno@gmail.com', 'bruno', 'austin', '${password}', 'true'),
('jane@gmail.com', 'jane', 'doe', '${password}', 'false'),
('ken@gmail.com', 'ken', 'max', '${password}', 'false'),
('smith@gmail.com', 'will', 'smith', '${password}', 'false'),
('max@gmail.com', 'spencer', 'max', '${password}', 'true'),
('bob@gmail.com', 'bob', 'lash', '${password}', 'false'),
('jake@gmail.com', 'jake', 'tom', '${password}', 'true');

INSERT INTO buses (plate_number, manufacturer, model, year, capacity)
VALUES ('ADSGIETY', 'volkswagen', 'b-class', '2015-03-12', '50'),
('YRTDFDTO', 'renault', 'tripper', '2012', '70'),
('SREGDSWR', 'mercedes', 'brt', '2013', '60'),
('ASDGTRED', 'man', 'e-class', '2011', '90'),
('VGFRSDCS', 'honda', 'civic', '2014', '20'),
('ADDRINFO', 'mercedes', 'capitol', '2016', '100'),
('MNDHGEVS', 'renault', 'next100', '2005', '100');

INSERT INTO trips (bus_id, origin, destination, fare, status)
VALUES ('10', 'enugu', 'kano', '50.50', 'in-active'),
('20', 'abia', 'ikeja', '70.50', 'in-active'),
('30', 'kano', 'jos', '80.50', 'in-active'),
('40', 'rome', 'canada', '100.50', 'active'),
('50', 'taraba', 'jalingo', '60.50', 'active'),
('60', 'gombe', 'damaturu', '20.30', 'in-active');
`
const addValues = async () => {
    await db.query(populate).then(() => {
        console.log('Tables sucessfuly populated')
    })
}

addValues();