import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config()
/**
   * Verify token to check if user is Authenticated
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next
   */
class tokenValidator {
    static verifyUser(req, res, next) {
        const token = req.headers['x-access-token'] || req.headers.authorization;
        if(!token) {
            return res.status(403).send({
                message: 'No token provided.',
              });
        }
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
              userToken = token.slice(7, token.length);
            }
            
            jwt.verify(userToken, process.env.SECRETkey, (err, decoded) => {
                if (err) {
                  return res.status(500).send({
                    auth: false,
                    message: 'Failed to authenticate token.',
                  });
                }
                // if everything good, save to request for use in other routes
                res.locals.userid = decoded.userid;
                res.locals.email = decoded.email;
                res.locals.isAdmin = decoded.isAdmin;
                next();
              });
    }
        //verify Admin
    static verifyAdmin(req, res, next) {
        let token = req.headers['x-access-token'] || req.headers.authorization; // Express headers are auto converted to lowercase
        if (!token) {
          return res.status(403).json({
            auth: false,
            message: 'No token provided.',
          });
        }
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
          }
          jwt.verify(token, process.env.SECRETkey, (err, decoded) => {
            if (err) {
              return res.status(500).json({
                auth: false,
                message: 'Failed to authenticate token.',
              });
            }
            if (decoded.isadmin === false) {
                return res.status(403).json({
                  auth: true,
                  isAdmin: false,
                  message: 'You do not have authorization to access this page',
                });
              }
              // if everything good, save to request for use in other routes
              res.locals.userid = decoded.id;
              next();
            });
        }
}
export default tokenValidator;