const paramChecker = require('../../middlewares/messages/param');

module.exports = (server) => {
    const Message = server.models.Message;

    return (req, res) => {
        if (!paramChecker.checkId(req.params.id)) {
            return res.status(404).json({error: 'Message not found'});
        }

        return Message.findByIdAndRemove(req.params.id)
            .then(respond)
            .catch((error) => {
                return res.status(500).json({error :error.message || 'An error occured'});
            });

        function respond() {
            return res.status(204).send()
        }
    }
};
