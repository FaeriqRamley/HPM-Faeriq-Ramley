const express = require('express');
const router = express.Router();

const {getTrelloBoards} = require('../middleware/trelloMiddleware');
const {syncBoards_get} = require('../controllers/boardController');

router.get('/syncBoards',getTrelloBoards,syncBoards_get);

module.exports = router;