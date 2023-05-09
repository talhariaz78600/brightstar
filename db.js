

const mongoose = require('mongoose');
const mongooseURI='mongodb+srv://talhariaz:talhariaz@cluster0.k2itfyk.mongodb.net/portel?retryWrites=true&w=majority'
const connectToMongo=()=>{
  mongoose.connect(mongooseURI,()=>{
      console.log("connected to mongo successfull")
  })
}
mongoose.set('strictQuery', false);
module.exports= connectToMongo;;
