const express = require('express');
const app = express();
const mongoose = require ('mongoose');
require('dotenv/config');
const postRoute = require('./routes/posts');
const bodyParser=require('body-parser');
// const cors = require ('cors');

app.use(bodyParser.json());

//middlewares
app.use('/posts', postRoute);
// app.use(cors());
//app.use('/user', )


//routes
app.get('/', (req,res)=>{
    res.send("Where A U now? Home?");
});



//connect to db
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=>{
    console.log('kire ma DB-gha');
});

//listening server
app.listen(3000);

// need to get response as an exercise