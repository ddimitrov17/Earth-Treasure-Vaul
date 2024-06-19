const { urlencoded, static: staticHandler } = require('express');
const { session } = require('../middleware/session');
const cookieParser = require('cookie-parser');

function configExpress(app) {
    app.use(cookieParser());
    app.use(session());
    app.use(urlencoded({ extended: true }));
    app.use('/static', staticHandler('static'));
}

module.exports = { configExpress };