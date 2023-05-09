

const mongoose = require('mongoose');
const mongooseURI='mongodb+srv://talhariaz:talhariaz@cluster0.k2itfyk.mongodb.net/portel?retryWrites=true&w=majority'
const connectToMongo = () => {
  mongoose.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true ,connectTimeoutMS: 50000,
    socketTimeoutMS: 50000})
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
}

module.exports= connectToMongo;
