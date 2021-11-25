require('dotenv').config();
const fetch = require('node-fetch');

// Function to create board. Not implemented
module.exports.createBoard = async (req,res,next) => {
    try {
        const apiRes = await fetch(`https://api.trello.com/1/boards/?name=${req.body.boardName}&key=${req.params.apiKey}}&token=${req.params.apiToken}`);
        const newBoard = apiRes.json();
        req.newBoard = newBoard;
        console.log('trello api success');
        next();
    } catch (err) {
        console.log('trello error caught')
        res.send(err)
    }
}

module.exports.getTrelloBoards = async (req,res,next) => {
    console.log('running gettrelloboards middleware');
    try {
        const apiRes = await fetch(`https://api.trello.com/1/members/me/boards?fields=name,url,desc&key=${req.params.apiKey}&token=${req.params.apiToken}`);
        const allBoards = await apiRes.json();
        req.trelloBoards = allBoards;
        console.log('trello api success');
        next();
    } catch (err) {
        console.log('trello error caught');
        console.log(err);
        res.send(err);
    }
}

module.exports.getTrelloBoardLists = async (req,res,next) => {
    console.log('running gettrelloboardlists middleware');
    try {
        const apiRes = await fetch(`https://api.trello.com/1/boards/${req.params.idBoard}/lists?key=${req.params.apiKey}&token=${req.params.apiToken}`);
        const allLists = await apiRes.json();
        req.trelloBoardLists = allLists;
        console.log('trello api success');
        next();
    } catch (err) {
        console.log('trello error caught');
        console.log(err);
        res.send(err);
    }
}

module.exports.getTrelloBoardCards = async (req,res,next) => {
    console.log('running gettrelloboardcards middleware');
    try {
        const apiRes = await fetch(`https://api.trello.com/1/boards/${req.params.idBoard}/cards?key=${req.params.apiKey}&token=${req.params.apiToken}`);
        const allCards = await apiRes.json();
        req.trelloBoardCards = allCards;
        console.log('trello api success');
        next();
    } catch (err) {
        console.log('trello error caught');
        console.log(err);
        res.send(err);
    }
}

module.exports.createTrelloTask = async (req,res,next) => {
    console.log('running createTrelloTask middleware');
    try {
        const apiRes = await fetch(
            `https://api.trello.com/1/cards?idList=${req.body.idList}&name=${req.body.name}&desc=${req.body.desc}&key=${req.params.apiKey}&token=${req.params.apiToken}`,
            {
                method:'POST',
                headers: {
                    'Accept': 'application/json'
                }
            }
        );
        const res_data = await apiRes.json()
        req.createdTask = res_data;
        console.log('trello api success');
        next();
    } catch (err) {
        console.log('trello error caught');
        res.status(400).send(err);
    }
}

module.exports.updateTrelloTask = async (req,res,next) => {
    console.log('running updateTrelloTask middleware');
    console.log(req.body);
    try {
        const apiRes = await fetch(
            `https://api.trello.com/1/cards/${req.body.idCard}?name=${req.body.name}&desc=${req.body.description}&idList=${req.body.idList}&key=${req.params.apiKey}&token=${req.params.apiToken}`,
            {
                method: 'PUT',
                headers: {
                'Accept': 'application/json'
                }
            }
        )
        const res_data = await apiRes.json();
        req.updatedTask = res_data;
        console.log('trello api success');
        next();
    } catch (err) {
        console.log('trello error caught');
        res.status(400).send(err);
    }
}

module.exports.archiveTrelloTask = async (req,res,next) => {
    console.log('running archiveTrelloTask middleware');
    try {
        const apiRes = await fetch(
            `https://api.trello.com/1/cards/${req.body.idCard}?closed=true&key=${req.params.apiKey}&token=${req.params.apiToken}`,
            {
                method: 'PUT',
                headers: {
                'Accept': 'application/json'
                }
            }
        )
        console.log('trello api success');
        next();
    } catch (err) {
        res.status(400).send(err);
    }
}