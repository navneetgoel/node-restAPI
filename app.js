const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes

const postRoute = require('./routes/posts');

app.use('/posts',postRoute);

//Routes
app.get('/',(req,res) => {
    res.send("We are at home")
});


//Connect to Database
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,  useUnifiedTopology: true}, ()=>{
    console.log("Connected to DB")
});



app.listen(3000);