module.exports = (server) => {
    const Message = server.models.Message;
    const bodyChecker = server.middlewares.messages.bodyChecker;
    return (req, res) => {
        if (!bodyChecker.checkPublic(req.body.public)) {
            return res.status(400).send({error: 'invalid value for parameter public: either 0 or 1'});
        }

        const body = {
            'text' : req.body.text,
            'public' : req.body.public,
        };
        const message =  new Message(body);

        return message.save()
          .then(respond)
          .catch((error) => {
              return res.status(500).json({error: error.message || 'An error occured'});
          });

          function respond() {
              return res.status(201).send()
          }
    };
};
