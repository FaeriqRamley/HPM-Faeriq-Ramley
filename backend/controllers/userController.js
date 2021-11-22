const UserModel = require('../models/UserModel');

module.exports.login_get = async (req,res) => {

    const user = await UserModel.findOne({username:req.body.username})

    if (user) {
        console.log('successfully logged in');
        res.status(200).send({message:'logged in',user})
    } else {
        console.log('login failed');
        res.status(401).send({message:'not logged in',user:{}})
    }
}

module.exports.signup_post = async (req,res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).send({message:'user created',user})
    } catch (err) {
        res.status(400).send(err);
    }
}