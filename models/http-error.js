/* helper class which extends Error with encapsulated http request specific codes 
   and messages
 */
class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
  }
}

module.exports = HttpError;
