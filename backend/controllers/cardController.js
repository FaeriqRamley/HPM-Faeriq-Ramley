const CardModel = require('../models/CardModel');
const ListModel = require('../models/ListModel');


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

module.exports.getBoardCards_get = async (req,res) => {
    try {
        const boardCards = await CardModel.find({idBoard:req.body.idBoard});

        console.log('===Cards\n',boardCards);

        const cardListObj = {}

        for (const card of boardCards){
            if (cardListObj[card.idList]){
                cardListObj[card.idList].push(card)
            } else {
                cardListObj[card.idList] = [card]
            }
        }

        res.status(200).send(cardListObj);

    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports.createTask_post = async (req,res) => {
    try {
        const newCard = await CardModel.create({
            idCard: req.createdTask.id,
            idBoard: req.createdTask.idBoard,
            idList: req.createdTask.idList,
            name: req.createdTask.name,
            description: req.createdTask.desc
        })
        
        res.status(201).send({message:'task created', newCard})
    } catch (err) {
        res.status(400).send(err);
    }
}