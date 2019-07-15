import { errorRes } from '../helpers/responseHandler'
class Validate {
    static signup(req, res, next) {
      req.checkBody('email')
      .notEmpty()
      .withMessage('Email is required')
      .trim()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
      .withMessage('Input a valid email')
      .customSanitizer(name => name.toLowerCase());
      req.checkBody('firstName')
        .notEmpty()
        .withMessage('First Name is required')
        .trim()
        .matches(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/)
        .withMessage('First Name Input is Invalid')
        .customSanitizer(name => name.toLowerCase());
      req.checkBody('lastName')
        .notEmpty()
        .withMessage('Last Name is required')
        .trim()
        .matches(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/)
        .withMessage('Last Name Input is Invalid')
        .customSanitizer(name => name.toLowerCase());
      req.checkBody('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password Should have a minimum length of 6');
      req
        .checkBody('is_admin')
        .notEmpty()
        .withMessage('False')
        .trim()
        .isLength({ min: 10 })
        .toBoolean('false')
      const errors = req.validationErrors();
      if (errors) {
        return errorRes(next, 400, errors[0].msg);
      }
      next();
     }

     static login(req, res, next) {
        req.checkBody('email')
          .notEmpty()
          .withMessage('Email is required')
          .trim()
          .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          )
          .withMessage('Input a valid email')
          .customSanitizer(name => name.toLowerCase());
        req.checkBody('password')
          .trim()
          .notEmpty()
          .withMessage('Password is required');
        const errors = req.validationErrors();
        if (errors) {
          return errorRes(next, 400, errors[0].msg);
        }
        next();
      }
    }
    export default Validate;
    