const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://suhas:suhas@cluster0.k0ity.mongodb.net/Form?retryWrites=true&w=majority')
.then(()=>{
    console.log("MongoDb is connected...");
})
.catch((e)=>{
    console.log("MongoDb is not connected...")
})