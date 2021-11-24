const BoardModel = require('../models/BoardModel');
const UserModel = require('../models/UserModel');

// Synchronize boards with Trello (Trello to DB only, not DB to Trello)
module.exports.syncBoards_post = async (req,res) => {
    const allBoardId = []
    for(const board of req.trelloBoards){
        allBoardId.push(board.id);
        await BoardModel.updateOne(
            {idBoard:board.id},
            {
                idBoard: board.id,
                ownerObjId: req.body._id,
                boardName: board.name,
                description: board.desc,
                url: board.url
            },
            {upsert:true}
        )
    }

    // update active boards
    console.log('allBoardId',allBoardId);
    console.log('userName',req.body.userName);
    await UserModel.updateOne({_id:req.body._id},{$set:{boardIdList:allBoardId}});

    res.json({message:'syncBoards works'});
}

// Get User Boards
module.exports.getUserBoards_get = async (req,res) => {
    const user = await UserModel.findById(req.params.dbUUID);
    if (user) {
        const userBoards = await BoardModel.find({idBoard:{$in:user.boardIdList}});
        res.status(200).send(userBoards);
    } else {
        res.status(404).send({message:"user not found"})
    }
}