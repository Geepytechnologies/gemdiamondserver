const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const packagesRoute = require('./routes/packages')
const withdrawalsRoute = require('./routes/withdrawals')
const depositsRoute = require('./routes/deposits')
const userRoute = require('./routes/users')

dotenv.config();

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials", true)
  next();
})
app.use(cors({origin: process.env.DOMAIN, credentials: true}));
app.use(express.json());
app.use(cookieParser());
// app.use(express.static("out"));
/* app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/out", "index.html"));
}) */

app.use("/api/auth", authRoute);
app.use("/api/packages", packagesRoute);
app.use("/api/withdrawals", withdrawalsRoute);
app.use("/api/deposits", depositsRoute);
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
app.get('/', (req,res)=>{
  res.json("The backend server is up and running")
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