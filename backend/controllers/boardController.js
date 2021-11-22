const BoardModel = require('../models/BoardModel');
const ListModel = require('../models/ListModel');

module.exports.syncBoards_get = async (req,res) => {
    for(const board of req.trelloBoards){

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
    res.json({message:'syncBoards works'});
}