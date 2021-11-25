const CardModel = require('../models/CardModel');

// function to synchronize board cards. Will delete archived cards from the database
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
        await CardModel.deleteMany({idBoard:req.params.idBoard,idCard:{$nin:idCardArr}});

        res.status(200).send({message:'successfully synced board cards'})
    } catch (err) {
        console.log('server/db error');
        res.status(400).send(err);
    }
}

// Get the board cards from the database
module.exports.getBoardCards_get = async (req,res) => {
    try {
        const boardCards = await CardModel.find({idBoard:req.params.idBoard});

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
        console.log('server/db error');
        res.status(400).send(err);
    }
}

// Function to create a task in database
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
        console.log('server/db error');
        res.status(400).send(err);
    }
}

// Function to update task in database
module.exports.updateTask_put = async (req,res) => {
    console.log('running updateTask_put');
    console.log('input',req.updatedTask);
    try {
        const updatedCard = await CardModel.findOneAndUpdate(
            {idCard:req.updatedTask.id},
            {
                idBoard: req.updatedTask.idBoard,
                idList: req.updatedTask.idList,
                name: req.updatedTask.name,
                description: req.updatedTask.desc
            },
            {new:true}
        )

        res.status(200).send({message:'task updated',updatedCard});
    } catch (err) {
        console.log('server/db error');
        res.status(400).send(err);
    }
}

// Function to archive task in database
module.exports.archiveTask_delete = async (req,res) => {
    try {
        const deletedCard = await CardModel.findOneAndDelete({idCard:req.body.idCard});
        res.status(200).send({message:'successfully archived',deletedCard});
    } catch (err) {
        console.log('server/db error');
        res.status(400).send(err);
    }
}