const queryChecker = require('../../middlewares/messages/query');

class NotFoundException extends Error{}

/* Apply a public status on filter
 * @param string status - Possible values: public or private
 * @throws NotFoundException if status is not valid
 * @return Object fitler
 */
module.exports = (status)  => {
    const filter = {};

    if (status) {
        if (!queryChecker.checkStatus(status)) {
            throw new NotFoundException();
        }

        filter.public = status === 'public' ? 1 : 0;
    }

    return filter;
}
