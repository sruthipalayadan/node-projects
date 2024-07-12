const pool=require('../config/db');
const  {addUserQueries,getUserByUsernameQueries,getUserRolesByUserIdQueries,getUserByUserIdQueries }=require('../queries/users');
const {hashPassword}=require('../utils/passwordHelper');


createUser=(username,password,first_name,last_name,dob,address,place,city,district,state,email,phone_no)=>
    {
        const hashedpassword=hashPassword(password);
        return new Promise((resolve, reject) => {
            pool.query(addUserQueries,[username,hashedpassword,first_name,last_name,dob,address,place,city,district,state,email,phone_no],
                (error,results)=>{
                    if(error)
                        {
                            reject(error);
                        }
                        else{
                            console.log("result-row-user-repo:",results.rows);
                            const userId=results.rows?results.rows[0].user_id:undefined;

                            resolve(userId);
                        }
                }
            )
        })
    };

    getUserByUsername=(username)=>
        {
            return new Promise((resolve, reject) => {
                pool.query(getUserByUsernameQueries,[username],(error,results)=>
                {
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(results.rows);
                    }
                })
            })
        };


        getUserByUserId=(userId)=>
            {
                return new Promise((resolve, reject) => {
                    pool.query(getUserByUserIdQueries,[userId],(error,results)=>
                    {
                        if(error){
                            reject(error);
                        }
                        else{
                            
                            resolve(results.rows);
                        }
                    })
                })
            };



            getUserRolesByUserId=(userId)=>
                {
                    return new Promise((resolve, reject) => {
                        pool.query(getUserRolesByUserIdQueries,[userId],(error,results)=>
                        {
                            if(error){
                                reject(error);
                            }
                            else{
                               
                                resolve(results.rows);
                            }
                        })
                    })
                }
    

    module.exports={createUser,getUserByUsername,getUserByUserId,getUserRolesByUserId};