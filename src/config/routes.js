const { Router } = require('express');
const { home, dashboard, search } = require('../controllers/catalog');
const { createGET } = require('../controllers/stones');

const router = Router();

router.get('/home', home);
router.get('/dashboard', dashboard);
router.get('/search', search);
router.get('/create/stone', createGET);

module.exports = { router };
