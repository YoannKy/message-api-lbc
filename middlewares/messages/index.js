module.exports = (server) => {
    return {
        bodyChecker: require('./body'),
        paramChecker: require('./param'),
        queryChecker: require('./query'),
    };
};
