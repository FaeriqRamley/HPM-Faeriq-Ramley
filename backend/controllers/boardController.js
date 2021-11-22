const BoardModel = require('../models/BoardModel');
const UserModel = require('../models/ListModel');

module.exports.syncBoards_get = async (req,res) => {
    const allBoardId = []
    for(const board of req.trelloBoards){
        allBoardId.push(board.id);
        await BoardModel.updateOne(
            {idBoard:board.id},
            {
                idBoard: board.id,
                boardName: board.name,
                description: board.desc,
                url: board.url
            },
            {upsert:true}
        )
    }

    await UserModel.updateOne({userName:req.body.userName},{$set:{boardIdList:allBoardId}})

    res.json({message:'syncBoards works'});
}