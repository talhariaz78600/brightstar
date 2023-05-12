const mongoose=require('mongoose');
const {Schema}=mongoose;
const ContactSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    messagebox:{
        type:String,
        require:true
    },
    date: { 
        type: Date, 
        default:Date.now,
     }
    })

    ContactSchema.index({ name: 1 }, { maxTimeMS: 20000 });

    module.exports = mongoose.model('contact', ContactSchema);