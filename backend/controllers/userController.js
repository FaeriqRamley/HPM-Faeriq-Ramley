const UserModel = require('../models/UserModel');

// temporary login function. If have time will implement password checking via bcrypt or logging in with jwt
module.exports.login_post = async (req,res) => {
    try {
        // console.log('searching for:',req.body.username,'with pw',req.body.password);
        const user = await UserModel.findOne({username:req.body.username,password:req.body.password})
    
        if (user) {
            console.log('successfully logged in');
            res.status(200).send({message:'logged in',user})
        } else {
            console.log('login failed');
            res.status(404).send({message:'not logged in',user:{}})
        }
    } catch(err){
        console.error(err)
    }
}

// signup user. Password saved as string
module.exports.signup_post = async (req,res) => {
    // console.log('signup for',req.body);
    try {
        const user = await UserModel.create(req.body);
        res.status(201).send({message:'user created',user})
    } catch (err) {
        res.status(400).send(err);
    }
}