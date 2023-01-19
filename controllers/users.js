const { createError } = require("../error.js")
const User = require("../models/User.js");


const update = async (req,res,next)=>{
    if(req.params.id === req.user.id){
      try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
          $set: req.body,
        },{new: true});
        res.status(200).json(updatedUser);
      }catch(err){
        next(err);
      }
    }else{
        return next(createError(403, "Unauthorized"))
    }
}
const getUser = async (req,res,next)=>{
   try{
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
   }catch(err){
    next(err);
   }
}

const getAllUsers = async (req,res,next)=>{
   try{
      const user = await User.find();
      res.status(200).json(user);
   }catch(err){
    next(err);
   }
}
const deleteUser = async (req,res,next)=>{
    if(req.params.id === req.user.id){
        try{
          await User.findByIdAndDelete(req.params.id,
         );
          res.status(200).json("user has been deleted");
        }catch(err){
          next(err);
        }
      }else{
          return next(createError(403, "Unauthorized Operation"))
      }
}

module.exports = {update, getUser, getAllUsers, deleteUser}