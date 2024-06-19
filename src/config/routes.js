const { Router } = require('express');
const { home, dashboard, search, details } = require('../controllers/catalog');
const { createGET, createPOST } = require('../controllers/stones');

const router = Router();

router.get('/home', home);
router.get('/dashboard', dashboard);
router.get('/search', search);
router.get('/create/stone', createGET);
router.get('/details/:id', details);



router.post('/create/stone', createPOST);

module.exports = { router };
