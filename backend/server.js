require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const TestModel = require('./models/TestModel');
const testRoutes = require('./routes/testRoutes');
const boardRoutes = require('./routes/boardRoutes');
const listRoutes = require('./routes/listRoutes');
const cardRoutes = require('./routes/cardRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(cors());
const mongoURI = process.env.mongo_uri
const PORT = process.env.PORT

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
app.use('/users',userRoutes);
app.use('/boards',boardRoutes);
app.use('/lists',listRoutes);
app.use('/cards',cardRoutes);