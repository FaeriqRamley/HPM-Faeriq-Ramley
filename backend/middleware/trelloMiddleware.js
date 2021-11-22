require('dotenv').config();
const fetch = require('node-fetch');
const apiKey = process.env.apiKey;
const apiToken = process.env.apiToken;

module.exports.createBoard = async (req,res,next) => {
    try {
        const apiRes = await fetch(`https://api.trello.com/1/boards/?name=${req.body.boardName}&key=${apiKey}}&token=${apiToken}`);
        const newBoard = apiRes.json();
        req.newBoard = newBoard;
        next();
    } catch (err) {
        res.send(err)
    }
}

module.exports.getTrelloBoards = async (req,res,next) => {
    console.log('running gettrelloboards middleware');
    try {
        const apiRes = await fetch(`https://api.trello.com/1/members/me/boards?fields=name,url,desc&key=${apiKey}&token=${apiToken}`);
        const allBoards = await apiRes.json();
        req.trelloBoards = allBoards;
        console.log('success');
        next();
    } catch (err){
        console.log('error caught')
        console.log(err);
        res.send(err);
    }
}

module.exports.getTrelloBoardLists = async (req,res,next) => {
    console.log('running gettrelloboardlists middleware');
    try {
        const apiRes = await fetch(`https://api.trello.com/1/boards/${req.body.boardId}/lists?key=${apiKey}&token=${apiToken}`);
        const allLists = await apiRes.json();
        req.trelloBoardLists = allLists;
        console.log('success');
        next();
    } catch(err){
        console.log('error caught');
        console.log(err);
        res.send(err);
    }
}

module.exports.getTrelloBoardCards = async (req,res,next) => {
    console.log('running gettrelloboardcards middleware');
    try {
        const apiRes = await fetch(`https://api.trello.com/1/boards/${req.body.boardId}/cards?key=${apiKey}&token=${apiToken}`);
        const allCards = await apiRes.json();
        req.trelloBoardCards = allCards;
        console.log('success');
        next();
    } catch(err){
        console.log('error caught');
        console.log(err);
        res.send(err);
    }
}