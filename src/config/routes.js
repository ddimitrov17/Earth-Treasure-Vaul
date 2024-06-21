const { Router } = require('express');
const { home, dashboard, search, details } = require('../controllers/catalog');
const { createGET, createPOST, editGET, editPOST, deleteGET, deletePOST } = require('../controllers/stones');
const { registerGET, loginGET, registerPOST, loginPOST, logout, like } = require('../controllers/user');
const { errorPage } = require('../controllers/404');
const { CheckForLoggedInUser, CheckIfThisIsTheOwner, ifThisIsNotTheOwner } = require('../middleware/guards');

const router = Router();

router.get('/home', home);
router.get('/dashboard', dashboard);
router.get('/search', search);
router.get('/create/stone',CheckForLoggedInUser(), createGET);
router.get('/details/:id', details);
router.get('/register', registerGET);
router.get('/login', loginGET);
router.get('/logout',CheckForLoggedInUser(), logout);
router.get('/edit/:id',CheckForLoggedInUser(),CheckIfThisIsTheOwner(), editGET);
router.get('/delete/:id',CheckForLoggedInUser(),CheckIfThisIsTheOwner(), deleteGET);

router.get('/like/:userId/:stoneId',CheckForLoggedInUser(),ifThisIsNotTheOwner(), like);

router.post('/create/stone', createPOST);
router.post('/register', registerPOST);
router.post('/login', loginPOST);
router.post('/edit/:id', editPOST);
router.post('/delete/:id', deletePOST);

router.get('*', errorPage);
module.exports = { router };
