/* Check the status
 * @param string status
 * @return Boolean result, true if valid false if not
 */
module.exports.checkPublic = (status) => {
  const allowedPublicValues = ['0', '1'];

  return allowedPublicValues.includes(status);
};
