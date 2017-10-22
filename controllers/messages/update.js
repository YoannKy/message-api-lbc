const paramChecker = require('../../middlewares/messages/param');
const bodyChecker = require('../../middlewares/messages/body');

module.exports = (server) => {
    const Message = server.models.Message;

    return (req, res) => {
        if (!paramChecker.checkId(req.params.id)) {
            return res.status(404).json({error: 'Message not found'});
        }

        if (!bodyChecker.checkPublic(req.body.public)) {
            return res.status(400).send({error: 'invalid value for parameter public: either 0 or 1'});
        }

        const body = {
            text: req.body.text,
            public: req.body.public
        };

        return Message.findByIdAndUpdate(req.params.id, body)
            .then(respond)
            .catch((error) => {
                return res.status(500).json({error :error.message || 'An error occured'});
            });

        function respond() {
            res.status(204).send();
        }
    };
};
