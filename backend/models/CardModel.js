const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema(
    {
        idCard: String,
        idBoard: String,
        idList: String,
        name: String,
        description: String
    },
    {
        collection: 'Cards'
    }
)

const CardModel = mongoose.model('CardModel',CardSchema);

module.exports = CardModel;