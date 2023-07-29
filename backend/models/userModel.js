const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add a email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password']
    },
    profilePic: {
        type: "String",
        default: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    },
    


},
{
    timestamps:true
})

const User = mongoose.model('User', userSchema);
module.exports = User;