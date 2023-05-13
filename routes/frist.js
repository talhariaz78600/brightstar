const express = require('express');
const router = express.Router();
const   Frist = require('../models/Frist')
router.post('/fristpage',async(req,res)=>{
    const photof=req.body.photof;
    const fristheading=req.body.fristheading;
   
    let success=false;
    try {
        const fristpage="fristpage";
        const creat= await Frist.create({
            photof:photof,
            fristheading:fristheading,
            fristpage:fristpage
        })
        success=true;
        res.json({creat,success});
        
    } catch (error) {
        console.error(error);
    }

})
////////////////////////fetch information for activites//////////////////////
router.get('/getactivites',async(req,res)=>{
    let success=false;
    try {
        const fristpage='fristpage';
        const activites= await Frist.find({fristpage});
        success=true;
        res.json({activites,success});
    } catch (error) {
        console.error(error);
    }
});
router.delete('/deleteactivites/:id', async (req, res) => {
    let success=false;
    try {
      ////////////////Find the note to be updated and updated it/////////////
      let student = await Frist.findById(req.params.id);
      if (!student) { return res.status(404).send("not found") }
      student = await Frist.findByIdAndDelete(req.params.id)
      success=true;
      res.json({success, "student": "activite deleted has been successfull" });
    } catch (error) {
      res.send(error);
    }
  
  
  })
module.exports=router;