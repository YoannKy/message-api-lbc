/* Check the status
 * @param string status
 * @return Boolean result, true if valid false if not
 */
module.exports.checkStatus = (status) => {
  const allowedPublicValues = ['public', 'private'];

  return allowedPublicValues.includes(status);
};
