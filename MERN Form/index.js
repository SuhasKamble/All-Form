const express = require('express');
require('./db/conn')
const router = require('./routes/router')
const app = express();

// middleware
app.use(express.json());
app.use('/api/v1/form',router);
app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.send("Hello World!")
})


const port  = 3000 || process.env.PORT;

app.listen(port, ()=>console.log(`Server is running on the port ${port}`))