/* Check the id
 * @param string id
 * @return Boolean result, true if valid false if not
 */
module.exports.checkId = (id) => {
    return id.match(/^[0-9a-fA-F]{24}$/);
};
