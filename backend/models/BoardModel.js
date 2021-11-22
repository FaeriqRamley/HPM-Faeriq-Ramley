const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema(
    {
        idBoard: String,
        boardName: String,
        description: String,
        url: String,
        listId: [{type:String,ref:'Lists'}]
    },
    {
        collection: 'Boards'
    }
)

const BoardModel = mongoose.model('BoardModel',BoardSchema);

module.exports = BoardModel;