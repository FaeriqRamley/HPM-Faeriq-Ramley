const express = require('express');
const mongoose = require('mongoose');
const TestModel = require('./models/TestModel');

const app = express();

app.use(express.json());
const mongoURI = 'mongodb://localhost:27017/hendricks-manager'
const PORT = 5000;

app.post('/test', async (req,res)=>{
    await TestModel.create({
        name: 'test object'
    });

    res.json({message:'works'});
});

mongoose
    .connect(mongoURI,{useNewUrlParser:true})
    .then(()=>{
        console.log('connected to local db');
        app.listen(PORT,()=>{
            console.log(`listening to Port: ${PORT}`);
        });
    })
    .catch(err=>console.log(err));
