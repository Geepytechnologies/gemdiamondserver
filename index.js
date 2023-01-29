const express = require('express');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer')
const path = require('path');
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const packagesRoute = require('./routes/packages')
const withdrawalsRoute = require('./routes/withdrawals')
const depositsRoute = require('./routes/deposits')
const purchasesRoute = require('./routes/purchases')
const userRoute = require('./routes/users');

dotenv.config();

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
}).single('receipt')

app.use(express.json());
app.use(cors({origin: process.env.DOMAIN, credentials:true}));
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", process.env.DOMAIN);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
})
app.use(cookieParser());
// app.use(express.static("out"));
/* app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/out", "index.html"));
}) */

app.use("/api/auth", authRoute);
app.use("/api/packages", packagesRoute);
app.use("/api/withdrawals", withdrawalsRoute);
app.use("/api/deposits", depositsRoute);
app.use("/api/purchases", purchasesRoute);
app.use("/api/users", userRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Server error";
  return res.status(status).json({
      success: false,
      status,
      message
  })
})
app.post('/upload', (req, res) => {
   upload(req, res, (err) => {
    if(err){
      res.json(err)
    }else{
      res.status(200).json("file uploaded")
      console.log(req.file)
    }
   });
})


app.get('/', (req,res)=>{
  res.json("The backend server is up and running")
})
app.get('/api/check', (req,res)=>{
  res.json("working")
})
const connect = ()=>{
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log("MongoDB is connected")
  })
  .catch((err)=>{
    throw err;
  })
}
const port = process.env.PORT || 5000
app.listen(port,()=>{
  connect();
  console.log("Backend server is running");
})



module.exports = app;