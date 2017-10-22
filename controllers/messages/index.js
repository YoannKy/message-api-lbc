module.exports = (server) => {
    return {
        create: require('./create')(server),
        list: require('./list')(server),
        show: require('./show')(server),
        update: require('./update')(server),
        delete: require('./delete')(server),
    };
};
