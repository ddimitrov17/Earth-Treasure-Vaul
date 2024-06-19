const express = require('express');
const { router } = require('./config/routes');
const { configHbs } = require('./config/hbs');
const { configExpress } = require('./config/express');
const { configDatabase } = require('./config/database');

const app = express();
const port = 3000;

async function start() {
    await configDatabase();
    configHbs(app);
    configExpress(app);
    app.use(router);
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
}

start();