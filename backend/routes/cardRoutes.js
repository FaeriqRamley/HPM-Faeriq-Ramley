const router = require('express').Router();
const {getTrelloBoardCards,createTrelloTask,updateTrelloTask,archiveTrelloTask} = require('../middleware/trelloMiddleware');
const {syncBoardCards_get,getBoardCards_get,createTask_post,updateTask_put,archiveTask_delete} = require('../controllers/cardController')

router.get('/syncBoardCards/:idBoard',getTrelloBoardCards,syncBoardCards_get);
router.get('/getBoardTasks/:idBoard',getBoardCards_get);
router.post('/createTask',createTrelloTask,createTask_post);
router.put('/updateTask',updateTrelloTask,updateTask_put);
router.delete('/archiveTask',archiveTrelloTask,archiveTask_delete);

module.exports = router;