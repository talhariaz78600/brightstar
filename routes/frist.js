const express = require('express');
const router = express.Router();
const   Frist = require('../models/Frist')
router.post('/fristpage',async(req,res)=>{
    const photof=req.body.photof;
    const fristheading=req.body.fristheading;
   
    try {
        const fristpage="fristpage";
        const creat= await Frist.create({
            photof:photof,
            fristheading:fristheading,
            fristpage:fristpage
        })
        res.json({creat});
        
    } catch (error) {
        console.error(error);
    }

})
////////////////////////fetch information for activites//////////////////////
router.get('/getactivites',async(req,res)=>{
    try {
        const fristpage='fristpage';
        const activites= await Frist.find({fristpage});
        res.json({activites});
    } catch (error) {
        console.error(error);
    }
});
router.delete('/deleteactivites/:id', async (req, res) => {

    try {
      ////////////////Find the note to be updated and updated it/////////////
      let student = await Frist.findById(req.params.id);
      if (!student) { return res.status(404).send("not found") }
      student = await Frist.findByIdAndDelete(req.params.id)
      res.json({ "student": "activite deleted has been successfull" });
    } catch (error) {
      res.error(error, "internal server error");
    }
  
  
  })
module.exports=router;