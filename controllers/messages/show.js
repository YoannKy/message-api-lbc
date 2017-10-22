const applyStatusFilter = require('../../utils/messages/applyStatusFilter');
const paramChecker = require('../../middlewares/messages/param');

module.exports = (server) => {
    const Message = server.models.Message;

    return (req, res) => {
      if (!paramChecker.checkId(req.params.id)) {
          return res.status(404).json({error: 'Message not found'});
      }

      let filter = {};

      if (req.query.status) {
          try {
            filter  = applyStatusFilter(req.query.status);
          } catch (e) {
              return res.status(400).json({error: 'invalid value for parameter status: either public or private'});
          }
      }

      Object.assign(filter, {_id : req.params.id});

      return Message.findOne(filter)
          .then((message) => {
              return res.json(message || {});
          })
          .catch((error) => {
              return res.status(500).json({error :error.message || 'An error occured'});
          });
      }
};
