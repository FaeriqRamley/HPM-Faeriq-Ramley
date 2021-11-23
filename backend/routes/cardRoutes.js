const router = require('express').Router();
const {getTrelloBoardCards,createTrelloTask,updateTrelloTask,archiveTrelloTask} = require('../middleware/trelloMiddleware');
const {syncBoardCards_get,getBoardCards_get,createTask_post} = require('../controllers/cardController')
router.get('/syncBoardCards',getTrelloBoardCards,syncBoardCards_get);
router.get('/getBoardTasks',getBoardCards_get);
router.post('/createTask',createTrelloTask,createTask_post);
router.put('/updateTask',updateTrelloTask,()=>{});
router.delete('/archiveTask',archiveTrelloTask,()=>{});

module.exports = router;