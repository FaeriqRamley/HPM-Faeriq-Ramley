const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
    {
        idList: {type:String,unique:true,required:true},
        idBoard: String,
        name: String,
    },
    {
        collection:'Lists'
    }
)

const ListModel = mongoose.model('ListModel',ListSchema);

module.exports = ListModel;