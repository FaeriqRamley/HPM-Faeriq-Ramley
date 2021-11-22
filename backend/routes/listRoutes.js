const router = require('express').Router();

const {getTrelloBoardLists} = require('../middleware/trelloMiddleware');
const {syncBoardList_get,getBoardLists_get} = require('../controllers/listController');

router.get('/syncBoardList',getTrelloBoardLists,syncBoardList_get);
router.get('/getBoardLists',getBoardLists_get);

module.exports = router;