const router = require('express').Router();

module.exports = (server) => {

    router.post('/',
        server.middlewares.bodyParser.json(),
        server.middlewares.checkMandatoryBodyFields(server.models.Message.schema),
        server.controllers.messages.create
    );

    router.get('/',
        server.controllers.messages.list
    );

    router.get('/:id',
        server.controllers.messages.show
    );

    router.put('/:id',
        server.middlewares.bodyParser.json(),
        server.middlewares.checkMandatoryBodyFields(server.models.Message.schema),
        server.middlewares.checkUnwantedBodyFields(['_id']),
        server.controllers.messages.update
    );

    router.delete('/:id',
        server.controllers.messages.delete
    );

    return router;
};
