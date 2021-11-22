const mongoose = require('mongoose');

// Dont forget to change password to hash later
const UserSchema = new mongoose.Schema(
    {
        userName: {type:String,unique:true,required:true},
        password: String,
        apiKey: String,
        apiToken: String,
        boardIdList: [String]
    },
    {
        collection: 'Users'
    }
)

const UserModel = mongoose.model('UserModel',UserSchema);

module.exports = UserModel;