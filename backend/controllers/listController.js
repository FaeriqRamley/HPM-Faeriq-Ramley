const ListModel = require('../models/ListModel');

module.exports.syncBoardList_get = async (req,res) => {
    const idListArr = []

    try{
        for(const trelloList of req.trelloBoardLists){
            idListArr.push(trelloList.id);
    
            await ListModel.updateOne(
                {idList:trelloList.id},
                {
                    idList: trelloList.id,
                    idBoard: trelloList.idBoard,
                    closed: trelloList.closed,
                    name: trelloList.name
                },
                {upsert:true}
            )
        }
    
        // delete lists that are no longer on the board
        await ListModel.deleteMany({idBoard:req.params.idBoard,idList:{$nin: idListArr}});

        res.status(200).send({message:'successfully synced lists',lists: req.trelloBoardLists});
    } catch(err){
        res.status(400).send(err)
    }
}

module.exports.getBoardLists_get = async (req,res) => {
    try {
        const lists = await ListModel.find({idBoard:req.params.idBoard});
        
        if (lists) {
            res.status(200).send(lists);
        } else {
            res.status(404).send({message:'lists not found'});
        }
    } catch (err) {
        res.status(400).send(err)
    }
}