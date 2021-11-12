const express = require('express');
const router = express();
const Form = require('../models/Form')

router.get("/",(req,res)=>{
    res.send("Hello world from the router");
})

router.post('/',async(req,res)=>{
    try{
        const form = await Form(req.body);
        form.save()
        res.status(201).json({form});
    }catch(e){
        console.log(e)
        res.status(500).json({error:"Something went wrong", message: e.error});
    }
})


module.exports = router;