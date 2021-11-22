const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema(
    {
        idBoard: {type:String,unique:true,required:true},
        boardName: String,
        description: String,
        url: String
    },
    {
        collection: 'Boards'
    }
)

const BoardModel = mongoose.model('BoardModel',BoardSchema);

module.exports = BoardModel;