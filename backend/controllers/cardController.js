const CardModel = require('../models/CardModel');


module.exports.syncBoardCards_get = async (req,res) => {
    const idCardArr = [];

    try {
        for(const card of req.trelloBoardCards){
            idCardArr.push(card.id);

            await CardModel.updateOne(
                {idCard:card.id},
                {
                    idCard: card.id,
                    idBoard: card.idBoard,
                    idList: card.idList,
                    name: card.name,
                    description: card.desc
                },
                {upsert:true}
            )
        }

        // Delete archived cards
        await CardModel.deleteMany({idBoard:req.body.idBoard,idCard:{$nin:idCardArr}});

        res.status(200).send({message:'successfully synced board cards'})
    } catch (err) {
        res.status(400).send(err);
    }
}