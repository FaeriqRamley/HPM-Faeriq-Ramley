const router = require('express').Router();

const {getTrelloBoards} = require('../middleware/trelloMiddleware');
const {syncBoards_get, getUserBoards_get} = require('../controllers/boardController');

router.get('/syncBoards',getTrelloBoards,syncBoards_get);
router.get('/getUserBoards',getUserBoards_get);

module.exports = router;