module.exports = (server) => {
    server.utils = {
        messages: require('./messages')(server),
    };
};
