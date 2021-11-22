const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
    {
        idList: String,
        idBoard: {type:String,ref:'boards'},
        name: String,
    },
    {
        collection:'Lists'
    }
)

const ListModel = mongoose.model('ListModel',ListSchema);

module.exports = ListModel;