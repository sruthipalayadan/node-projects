const usersRepository = require("../repositories/users");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const {createJwt}=require("../utils/jwtHelper");
const {compareWithHashedPassword}=require("../utils/passwordHelper");
// @desc Create new user
//@route POST/api/auth/signup
//@access public
const createUser= asyncHandler(async (req, res, next) => {
    console.log("body:", req.body);
    const { username,password,first_name,last_name,dob,address,place,city,district,state,email,phone_no } = req.body;
    
    const users=await usersRepository.getUserByUsername(username);
    if(users&&users.length>0){
       return next(new ErrorResponse(`username(${username}) already taken`,400));
    }
    
    const userId = await usersRepository.createUser(
        username,
        password,
        first_name,
        last_name,
        dob,
        address,
        place,
        city,
        district,
        state,
        email,
        phone_no
    );
    const token=createJwt(userId);
    console.log("useid:",userId);
    if (userId) {
      res.status(201).json({success:true,data:{ message: "user added successfully",name:first_name,token:token }});
    }
  
  });

   // @desc  user login
//@route POST/api/auth/login
//@access public
const login= asyncHandler(async (req, res, next) => {
  //get user by username
  //compare pw
  //invalid return 400
  //valid token

  console.log("body:", req.body);
  const { username,password } = req.body;
  const users=await usersRepository.getUserByUsername(username);
  if(!users||users.length==0){
     return next(new ErrorResponse(`Invalid credentials`,400));
  }
  const user=users[0];
  const isValid=compareWithHashedPassword(password,user.password);
  
  if(isValid)
  {
  const token=createJwt(user.user_id);
  return res.status(200).json({ message: "successfully logged in",user:{name:user.first_name },token:token});
  } 
  return next(new ErrorResponse("invalid credentials",400));
  
});


  module.exports={createUser,login};