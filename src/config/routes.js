const { Router } = require('express');
const { home, dashboard, search, details } = require('../controllers/catalog');
const { createGET, createPOST } = require('../controllers/stones');
const { registerGET, loginGET, registerPOST, loginPOST } = require('../controllers/user');
const { errorPage } = require('../controllers/404');

const router = Router();

router.get('/home', home);
router.get('/dashboard', dashboard);
router.get('/search', search);
router.get('/create/stone', createGET);
router.get('/details/:id', details);
router.get('/register', registerGET);
router.get('/login', loginGET);



router.post('/create/stone', createPOST);
router.post('/register', registerPOST);
router.post('/login', loginPOST);

router.get('*', errorPage);
module.exports = { router };
