const { Router } = require('express');
const { home, dashboard, search, details } = require('../controllers/catalog');
const { createGET, createPOST, editGET, editPOST } = require('../controllers/stones');
const { registerGET, loginGET, registerPOST, loginPOST, logout, like } = require('../controllers/user');
const { errorPage } = require('../controllers/404');

const router = Router();

router.get('/home', home);
router.get('/dashboard', dashboard);
router.get('/search', search);
router.get('/create/stone', createGET);
router.get('/details/:id', details);
router.get('/register', registerGET);
router.get('/login', loginGET);
router.get('/logout',logout);
router.get('/edit/:id',editGET);

router.get('/like/:userId/:stoneId',like);

router.post('/create/stone', createPOST);
router.post('/register', registerPOST);
router.post('/login', loginPOST);
router.post('/edit/:id',editPOST);

router.get('*', errorPage);
module.exports = { router };
