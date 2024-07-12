const pool=require('../config/db');
//const { deleteProduct } = require('../controller/product');
//const { updateProduct } = require('../controller/product');
//const { createProduct } = require('../controller/product');
//const { getProductById } = require('../controller/product');
const  {
    getAllProductsQuery,
    getProductByIdQuery,
    addProductQuery,
    updateProductQuery,
    removeProductQuery,
      }=require('../queries/product')


const getAllProducts=()=>{
    return new Promise((resolve, reject) => {
        pool.query(getAllProductsQuery,(error,results)=>
            {
                if(error) 
                    {
                        reject(error);
                    }
                else{
                     resolve(results.rows);
                    }
            }
            )        
    })  
}

getProductById=(id)=>{
    return new Promise((resolve, reject) => {
        pool.query( getProductByIdQuery,[id],(error,results)=>
            {
                if(error) 
                    {
                        reject(error);
                    }
                else
                {
               resolve(results.rows);
                }
            }
            )  


    })
}


createProduct =(product_id,title, price, offer_price,url)=>{
    return new Promise((resolve, reject) => {
        pool.query(addProductQuery,[product_id,title, price, offer_price,url],(error, results) => 
            {
                if (error) {
                    reject(error);
                }
                else{
                resolve(true);
                }
            }
            )

        
    })
}

checkProductExistsById=(id)=>{
    return new Promise((resolve, reject) => {
        pool.query( getProductByIdQuery,[id],(error,results)=>
            {

                if(error) 
                    {
                        resolve(false);
                    }
                else
                {
               resolve(results.rows.length>0);
                }
            }
            )  
    })
}

updateProduct=(title,price,offer_price,id)=>
    {
        return new Promise((resolve, reject) => {
            pool.query(updateProductQuery,[title, price, offer_price, id],(error, results) => 
                {
                if (error) {
                    reject(error);
                }
                else{
                resolve(results.rows);}
                }
                )
        })
    }
    deleteProduct=(id)=>{
        return new Promise((resolve, reject) => {
            pool.query(removeProductQuery, [id], (error, results) =>
                {
                    if (error) {
                        reject(error);
                    }
                    else{
                    resolve(results.rows);}
                    })

        })
    }

module.exports={getAllProducts,getProductById,createProduct,checkProductExistsById,updateProduct,deleteProduct};