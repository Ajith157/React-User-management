const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')


const registerUser=asyncHandler(async(req,res)=>{
    console.log(req.body)

    const {name,email,password}=req.body


    if(!name || !email ||! password){
        res.status(400)
        throw new  Error("please fill");
    }
    // check if user exist

    const userExists=await User.findOne({email})

    if(userExists){
        res.send(400)
        throw new Error('User already Exist')
    }

    // Hash password

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    // create user
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })

    if (user) {
        res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generatetoken(user._id),
          profilePic: user.profilePic,
        });
      } else {
        res.status(400);
        throw new Error("Invalid User Data");
      }
   
})
//  login user
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});

    if(user&&(await bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token: generatetoken(user._id),
            profilePic: user.profilePic,
        })
    }else{
        res.status(402)
        throw new Error("Invalid credentials")
    }
    res.json({message:"Login User"})
})

const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.User);
    res.status(200).json({
      id: _id,
      name,
      email,
    });
  });


       

const generatetoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  };    









module.exports={
    registerUser,
    loginUser,
    getMe,
}


