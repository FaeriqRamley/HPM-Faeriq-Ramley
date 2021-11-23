const router = require('express').Router();
const {getTrelloBoardCards,createTrelloTask,updateTrelloTask,archiveTrelloTask} = require('../middleware/trelloMiddleware');
const {syncBoardCards_get} = require('../controllers/cardController')
router.get('/syncBoardCards',getTrelloBoardCards,syncBoardCards_get);
router.get('/getBoardTasks',()=>{});
router.post('/createTask',createTrelloTask,()=>{});
router.put('/updateTask',updateTrelloTask,()=>{});
router.delete('/archiveTask',archiveTrelloTask,()=>{});

module.exports = router;