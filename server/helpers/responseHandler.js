/**
 *    @fileOverview Class to hold response messages
 *    @class ResponseHelper
 *    @exports ResponseHelper
 */

class ResponseHandler {
  /**
     * success: prepare json response for API endpoint
     * @param {object} res response object
     * @param {Number} statusCode success status code of response
     * @param {object} data Object data corresponding with success status code
     * @returns {object} json response object
    * */

  static success(res, statusCode, data) {
    return res.status(statusCode).json({
      status: 'success',
      data,
    });
  }

  /**
     * error: prepare json response for API endpoint
     * @param {object} res response object
     * @param {Number} statusCode error status code of response
     * @param {object} error error message corresponding with status code
     * @returns {object} json response object
    * */

  static error(res, statusCode, error) {
    return res.status(statusCode).json({
      status: 'error',
      error,
    });
  }
}


export default ResponseHandler;