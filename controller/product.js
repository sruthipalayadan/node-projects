const pool=require('../config/db');
const  {
    getAllProductsQuery,
    getProductByIdQuery,
    addProductQuery,
    updateProductQuery,
    removeProductQuery,
  }=require('../queries/product')

// @desc Get all products
//@route GET/api/products
//@access public
const getAllProducts=(req,res,next)=>
    {
        pool.query(getAllProductsQuery,(error,results)=>
            {
                if(error) throw error;
                res.status(200).json(results.rows);
        
            }
            )
        
    }
// @desc Get product by id
//@route GET/api/products/:id
//@access public
    const getProductById=(req,res,next)=>
        {
            const id=req.params.id
            pool.query( getProductByIdQuery,[id],(error,results)=>
                {
                    if(error) throw error;
                    res.status(200).json(results.rows);
            
                }
                )
                
        }
 // @desc Create new product
//@route POST/api/products
//@access public
const createProduct=(req,res,next)=>
    {
        console.log("body:",req.body);
        const { product_id,title, price, offer_price,url } = req.body;
        pool.query(addProductQuery,[product_id,title, price, offer_price,url],(error, results) => 
            {
                if (error) throw error;
                res.status(201).json({ message: "product added successfully" });
            }
            )

        //res.status(200).json({sucess:true,Data:{id:3,title:"Mens Casual Premium Slim Fit T-Shirts",price:82.5,imageUrl:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}});
    }

// @desc Update product
//@route PUT/api/products
//@access public
const updateProduct=(req,res,next)=>
    {
        console.log("body:",req.body);
       const {id} = req.params;
        const { title,price, offer_price } = req.body;
        pool.query(updateProductQuery,[title, price, offer_price, id],(error, results) => 
            {
            if (error) throw error;
            res.status(200).json({ message: "successfully updated product " });
            }
            )


        //res.status(200).json({sucess:true,Data:{id:req.params.id,title:"Mens Cotton Jacket",price:89.5,imageUrl:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}});
    }
// @desc Delete product by id
//@route DELETE/api/products/:id
//@access public
    const deleteProduct=(req,res,next)=>
        {
            const {id } = req.params;
            pool.query(removeProductQuery, [id], (error, results) =>
                 {
                    if (error) throw error;
                    res.status(200).json({ message: "successfully deleted  the product " });
                    })
           // res.status(200).json({sucess:true,Data:{id:req.params.id,message:`successfully deleted product with id:${req.params.id}`}});
        }


    module.exports={getAllProducts,getProductById,createProduct,updateProduct,deleteProduct};