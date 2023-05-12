const express = require('express');
const router = express.Router();
const Contact=require('../models/Contact');
//////////////////////////////////post box////////////////////////////////////
router.post('/vistercontact',async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const message=req.body.message;
    let success=false;
try {
    

    const con = await Contact.create({
        message:message,
        email:email,
        name:name,
        messagebox:"school"
      })
     success=true;
    res.json({success,con});
} catch (error) {
    res.json({error,success});
}
})
///////////////////////////////////get message//////////////////////////////
router.get('/getmessage', async (req,res)=>{
    const messagebox="school";
    let success=false;
    try {
        const find= await Contact.find({messagebox});
        success=true;
        res.json({find,success})
    } catch (error) {
        res.json({error,success});
    }
})
//////////////////////////////// delete message/////////////////////////////
router.delete('/deletemessage/:id', async (req,res)=>{
    let success=false;
    


    let found= await Contact.findById(req.params.id);
    if (!found) { return res.status(404).send("not found") }
    success=true;
    found = await Contact.findByIdAndDelete(req.params.id)
    res.json({ success,"found": "message deleted has been successfull" });
})

module.exports=router;