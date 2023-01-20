const Deposits = require('../models/Deposits');
const User = require('../models/User');
const {createError} = require('../error');

//initiate a deposit
const initiatedeposit = async (req,res,next) => {
    const userid = req.user.id;
    const amount = req.body.amount;
    const depositRequest = new Deposits({...req.body, userid, amount});
    try{
       const data = await depositRequest.save();
       res.status(201).json(data);
    }catch(err){
        next(err);
    }
}

//complete a deposit
const completedeposit = async (req,res, next) =>{
    const userid = req.user.id;
    const checkuser = await User.findById(userid);
    const user = req.body.id;
    if(checkuser.isAdmin){
        try{
           const updateduser = await User.findByIdAndUpdate(user,{
            $inc: {balance: req.body.amount},
            $set: req.body,
          },{new: true});
           const response = await Deposits.findByIdAndUpdate(req.params.id,{
            $set: req.body,
          },{new: true});
          res.status(200).json("user updated");
        }catch(err){
            next(err);
        }
    }else{
       next(createError(401, "You are not an Admin"))
    }
}
//get deposit
const getdeposit = async (req,res,next)=>{
    try{
       const deposit = await Deposits.findById(req.params.id);
       res.status(200).json(deposit);
    }catch(err){
     next(err);
    }
 }
//get all deposits
const getalldeposits = async (req,res,next)=>{
    try{
       const response = await Deposits.find();
       res.status(200).json(response);
    }catch(err){
     next(err);
    }
 }
module.exports = {initiatedeposit, completedeposit, getdeposit, getalldeposits}