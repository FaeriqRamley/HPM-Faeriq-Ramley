const router = require('express').Router();

const {getTrelloBoards} = require('../middleware/trelloMiddleware');
const {syncBoards_post, getUserBoards_get} = require('../controllers/boardController');

router.post('/syncBoards',getTrelloBoards,syncBoards_post);
router.get('/getUserBoards/:dbUUID',getUserBoards_get);

module.exports = router;