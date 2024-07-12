const {verifyToken}=require('../utils/jwtHelper');
const {getUserRolesByUserId}=require('../repositories/users');

const verifyTokenHandler= async(req,res,next)=>
{
    let token=req.headers['authorization'];
    if(token&&token.includes('Bearer '))
        {

            try{
                const result= await verifyToken(token);
                const userId=result.userid; 
                 req.userId=userId;
                return next();
            }
            catch(error)
            {
                return res.status(401).json({message:'Invalid token'});
            }

        }
        else{
            res.status(401).json({message:'No token provided'});
        }
};

const verifyRoles=(roles)=>{
    return async(req,res,next)=>{
    //req.userid-get role by userid
    //if user has roles mentioned in array,then proceed
    //block user
    const userId=req.userId;
    const userRoles=await getUserRolesByUserId(userId);
    console.log('roles:',userRoles);
    let hasRole=false;
    for(let userRole of userRoles){
        if(roles.includes(userRole.role_name)){
            hasRole=true;
            break;
        }
    }
    if(hasRole){
        next();
    }
    else{
        res.status(403).json({message:"You don't have permission"}); 
    }


}
}
module.exports={verifyTokenHandler,verifyRoles};
