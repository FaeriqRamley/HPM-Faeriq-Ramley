require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const TestModel = require('./models/TestModel');
const testRoutes = require('./routes/testRoutes');
const boardRoutes = require('./routes/boardRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
const mongoURI = process.env.mongo_uri
const PORT = process.env.PORT

// test route
// app.post('/test', async (req,res)=>{
//     await TestModel.create({
//         name: 'test object'
//     });

//     res.json({message:'works'});
// });

mongoose
.connect(mongoURI,{useNewUrlParser:true})
.then(()=>{
    console.log('connected to local db');
    app.listen(PORT,()=>{
        console.log(`listening to Port: ${PORT}`);
    });
})
.catch(err=>console.log(err));


app.use('/testRoute',testRoutes);
app.use('/boards',boardRoutes);
app.use('/users',userRoutes);