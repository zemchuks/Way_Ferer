import Joi from '@hapi/joi';
import Validator from '../helpers/validator';
import rules from '../helpers/rules';
import responseHandler from '../helpers/responseHandler'
import errorStrings from '../helpers/errorStrings'


class validateUser {
  /**
   * validate signup input form data
   * @param {Object} request
   * @param {Object} response
   * @callback {Function} next
   * @return {Object} error
   */

static validateSignupFormData(request, response, next) {
  const name = Joi.string().regex(rules.validName).required().error(new Error(errorStrings.validName));
  const password = Joi.string().min(8).required().strict();
  const email = Joi.string().email().lowercase().required();

  const createSignUpSchema = Joi.object().keys({
    email,
    firstname: name,
    lastname: name,
    password,
  });
  const error = Validator.validateJoi(request.body, createSignUpSchema);
  if (!error) {
    return next();
  }
  return responseHandler.error(response, 400, error);
}

/**
   * validate email and password
   * @param {Object} request
   * @param {Object} response
   * @callback {Function} next
   * @return {Object} error
   */
  static validateSigninFormData(request, response, next) {
    const password = Joi.string().required();
    const email = Joi.string().email().lowercase().required();

    const createSignUpSchema = Joi.object().keys({
      password,
      email,
    });
    const error = Validator.validateJoi(request.body, createSignUpSchema);
    if (!error) {
      return next();
    }
    return responseHandler.error(response, 400, error);
  }
}
export default validateUser;