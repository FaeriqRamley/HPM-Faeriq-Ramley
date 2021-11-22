const router = require('express').Router();
const {test_post,test_get} = require('../controllers/testController');

router.get('/test_get',test_get)
router.post('/test_post',test_post)

module.exports = router