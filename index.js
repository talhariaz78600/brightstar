const connectToMongo=require('./db');
const bodyParser = require('body-parser');
const cors=require('cors')
connectToMongo();   
const express = require('express')
const app = express()
const port =process.env.port|| 4000;
app.use(bodyParser.json({ limit: '100mb' }));

app.use(express.json())
app.use(cors());
///avilable routes////////
app.get('/',(req,res)=>{
  res.send("<h1>working fine</h1>")

})
app.use('/api/email',require('./routes/mail'));
app.use('/api/student',require('./routes/student'));
app.use('/api/teacher',require('./routes/teacher'));
app.use('/api/attendence',require('./routes/attendence'));
app.use('/api/admin',require('./routes/admin'));
app.use('/api/result',require('./routes/result'));
app.use('/api/frist',require('./routes/frist'));
app.use('/api/event',require('./routes/event'));
app.use('/api/contact',require('./routes/contact'));
const server=app.listen(port, () => {
  console.log(`schoolbrightstar app listening on port ${port}`)
  
})
server.timeout = 60000;