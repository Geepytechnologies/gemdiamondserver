const User =  require("../models/User.js");
const bcrypt =  require("bcryptjs");
const { createError } = require("../error.js");
const jwt =  require("jsonwebtoken");


const signup = async (req, res, next) => {
  const existingemail = await User.findOne({ email: req.body.email })
  const existinguser = await User.findOne({ email: req.body.email, phone: req.body.phone })
  const existingphone = await User.findOne({phone: req.body.phone })
  try {
    if (existinguser) return next(createError(409, "User already exists"))
    else if (existingemail) return next(createError(409, "Email already exists"))
    else if (existingphone) return next(createError(409, "Phone number already exists"))
    else {
      const salt = bcrypt.genSaltSync(10);
      const hashedpassword = bcrypt.hashSync(req.body.password, salt);
      const user = new User({ ...req.body, password: hashedpassword });
      await user.save();
      res.status(201).json(user);
    }
  } catch (err) {
    next(err);
  }
}
const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return next(createError(404, "User not found"));


    const isMatched = bcrypt.compareSync(req.body.password, user.password);
    if (!isMatched) return next(createError(400, "wrong credentials"));

    const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET)
    const { password, ...others } = user._doc;

    // res.cookie('_token', token, {
    //   httpOnly: true,
    //   sameSite: 'none',
    //   secure: true,
    //   // domain: 'http://localhost:3000'
    //   // maxAge: 3600 * 24,
    // })
    res.status(200).json({others, accessToken});
  } catch (err) {
    next(err);
  }
}
const signout = (req,res)=>{
  res.clearCookie("_token",{
    // httpOnly: true,
    sameSite: 'none',
    // secure: true,
    // maxAge: 3600 * 24,
  }).status(200).json('user logged out')
}
const changepassword = async (req,res,next)=>{
  try{
    const user = await User.findOne({ email: req.body.email })
    if (!user) return next(createError(404, "User not found"));
    const isMatched = bcrypt.compareSync(req.body.oldpassword, user.password);
    if (!isMatched) return next(createError(400, "Old password is incorrect"));
    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(req.body.newpassword, salt);
    const updateduser = await User.findByIdAndUpdate(req.body.userid,{
        password: hashedpassword
    })
    res.status(201).json('successful')
  }catch(err){
     next(err);
  }
}

module.exports = {signup, signin, signout, changepassword}

