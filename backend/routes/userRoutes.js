const router = require('express').Router();

const {login_get,signup_post} = require('../controllers/userController');

router.get('/login',login_get);
router.post('/signup',signup_post);

module.exports = router;