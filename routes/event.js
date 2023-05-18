const express = require('express');
const router = express.Router();
const   Event = require('../models/Event')
router.post('/eventpage',async(req,res)=>{
    const photoevent=req.body.photoevent;
    const location=req.body.location;
    const eventname=req.body.eventname;
    const date=req.body.date;
   
    let success=false;
    try {
        const event="event";
        const creat= await Event.create({
            photoevent:photoevent,
            location:location,
            eventname:eventname,
            date:date,
            event:event
        })
        success=true;
        res.json({creat,success});
        
    } catch (error) {
        res.json({error,success});
    }

})
////////////////////////fetch information for activites//////////////////////
router.get('/getevent',async(req,res)=>{
    let success=false;
    try {
        const event='event';
        const ev= await Event.find({event});
        success=true;
        res.json({ev,success});
    } catch (error) {
        res.json({error,success});
    }
});
router.delete('/deleteevent/:id', async (req, res) => {
    let success=false;
    try {
      ////////////////Find the note to be updated and updated it/////////////
      let student = await Event.findById(req.params.id);
      if (!student) { return res.status(404).send("not found") }
      student = await Event.findByIdAndDelete(req.params.id)
      success=true;
      res.json({success, "student": "activite deleted has been successfull" });
    } catch (error) {
      res.send(error);
    }
  
  
  })
module.exports=router;