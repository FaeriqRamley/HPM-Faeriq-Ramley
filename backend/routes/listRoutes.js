const router = require('express').Router();

const {getTrelloBoardLists} = require('../middleware/trelloMiddleware');

router.get('/syncBoardList',getTrelloBoardLists)

module.exports = router;