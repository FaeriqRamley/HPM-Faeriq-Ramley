const express = require('express');

const app = express();

app.use(express.json());

app.get('/test',(req,res)=>{
    res.json({message:'works'});
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`listening to Port: ${PORT}`)
});