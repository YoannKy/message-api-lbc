module.exports = (server) => {
    server.controllers = {
        messages: require('./messages')(server),
    };
};
