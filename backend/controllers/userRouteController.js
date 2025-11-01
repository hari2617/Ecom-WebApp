import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/userModel.js";


const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    
    const user=await User.findOne({email});

    if(user &&(await user.matchPassword(password))){
        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
            
        })
    }else{
        res.status(401);
        throw new Error("Invalid email or password")
    }
})



const registerUser=asyncHandler(async(req,res)=>{
    res.send("register user");
})


const logoutUser=asyncHandler(async(req,res)=>{
    res.send("logout user");
})



const getUserProfile=asyncHandler(async(req,res)=>{
    res.send(" get user prof");
})

const updateUserProfile=asyncHandler(async(req,res)=>{
    res.send(" update user prof");
})

const getUsers=asyncHandler(async(req,res)=>{
    res.send("get users");
})

const getUserById=asyncHandler(async(req,res)=>{
    res.send(" get uer by id");
})


const deleteUser=asyncHandler(async(req,res)=>{
    res.send(" delete user");
})

const updateUser=asyncHandler(async(req,res)=>{
    res.send(" update user");
})


export{
    authUser,
    registerUser,
    logoutUser,
    getUserById,
    getUserProfile,
    getUsers,
    updateUser,
    updateUserProfile,
    deleteUser
}


 