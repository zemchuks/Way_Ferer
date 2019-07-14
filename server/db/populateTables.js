const populate = `
INSERT INTO users (email, firstname, lastname, password, is_admin)
VALUES ('bruno@gmail.com', 'bruno', 'austin', 'password', 'false'),
('jane@gmail.com', 'jane', 'doe', 'wordpass', 'false'),
('ken@gmail.com', 'ken', 'max', 'passwerd', 'false'),
('smith@gmail.com', 'will', 'smith', '$willsmith', 'false');

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
`;
export default populate;