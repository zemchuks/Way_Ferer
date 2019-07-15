const populate = `
INSERT INTO users (email, firstname, lastname, password, is_admin)
VALUES ('bruno@gmail.com', 'bruno', 'austin', 'password', 'false'),
('jane@gmail.com', 'jane', 'doe', 'password', 'false');

INSERT INTO buses (plate_number, manufacturer, model, year, capacity)
VALUES ('ADSGIETY', 'volkswagen', 'b-class', '2015-03-12', '50'),
('YRTDFDTO', 'renault', 'tripper', '2012', '70'),
('SREGDSWR', 'mercedes', 'brt', '2013', '60');

INSERT INTO trips (bus_id, origin, destination, fare, status)
VALUES ('10', 'enugu', 'kano', '50.50', 'active'),
('20', 'abia', 'ikeja', '70.50', 'active'),
('30', 'kano', 'jos', '80.50', 'active');
`;
export default populate;