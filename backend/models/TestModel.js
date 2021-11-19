const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema(
    {
        name:String,
    },
    {
        collection: 'test-collection'
    }
)

const TestModel = mongoose.model('TestModel',TestSchema);

module.exports = TestModel;