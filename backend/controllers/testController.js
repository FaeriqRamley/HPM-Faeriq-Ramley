const TestModal = require('../models/TestModel');

module.exports.test_get = async (req,res) => {
    res.json({message:'test get works'})
}


module.exports.test_post = async (req,res)=> {

    await TestModel.create({
        name: 'test object'
    });

    res.json({message:'works'});
}