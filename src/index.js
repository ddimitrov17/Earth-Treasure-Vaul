const express = require('express');
const { Router } = require('express');
const { configHbs } = require('./config/hbs');
const { configExpress } = require('./config/express');
const { configDatabase } = require('./config/database');

const router = Router();

const app = express();
const port = 3000;

async function start() {
    await configDatabase();
    configHbs(app);
    configExpress(app);
    app.use(router);
    router.get('/home', (req, res) => {
        res.render('home');
    });
    router.get('/dashboard', (req, res) => {
        res.render('dashboard');
    });
    router.get('/search', (req, res) => {
        res.render('search');
    });
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
}

start();