const express = require('express');

const app = express();


//Middleware

app.use('/test',()=>{
    console.log("This is test midlleware");
});


//Routes
app.get('/',(req,res) => {
    res.send("We are at home")
});



app.listen(3000);