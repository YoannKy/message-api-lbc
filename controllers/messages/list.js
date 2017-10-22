const applyStatusFilter = require('../../utils/messages/applyStatusFilter');

module.exports = (server) => {
    const Message = server.models.Message;

    return (req, res) => {
        let filter = {};

        if (req.query.status) {
            try {
              filter  = applyStatusFilter(req.query.status);
            } catch (error) {
                return res.status(400).json({error: 'invalid value for parameter status: either public or private'});
            }
        }

        return Message.find(filter)
            .then((res.send.bind(res)))
            .catch((error) => {
                return res.status(500).json({error :error.message || 'An error occured'});
            });
    }
};
