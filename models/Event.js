const mongoose=require('mongoose');
const {Schema}=mongoose;
const EventSchema= new Schema({
    photoevent:{
        type:String,
        require:true
    },
    eventname:{
        type:String,
    },
    event:{
        type:String,
        require:true
    },
    location:{
        type:String,
        
    },
    date: { 
        type: String, 
        require:true
     }
    })

    EventSchema.index({ name: 1 }, { maxTimeMS: 20000 });

    module.exports = mongoose.model('event', EventSchema);