// @desc Get all products
//@route GET/api/products
//@access public
const getAllProducts=(req,res,next)=>
    {
        res.status(200).json({sucess:true,Data:[{id:1,title:"Fjallraven - Foldsack No. 1 Backpack",price:109.5,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},{id:2,title:"Mens Casual Premium Slim Fit T-Shirts",price:92.5,imageUrl:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}]});
    
    }
// @desc Get product by id
//@route GET/api/products/:id
//@access public
    const getProductById=(req,res,next)=>
        {
            res.status(200).json({sucess:true,Data:{id:req.params.id,title:"Fjallraven - Foldsack No. 1 Backpack",price:109.5,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}});
        }
 // @desc Create new product
//@route POST/api/products
//@access public
const createProduct=(req,res,next)=>
    {
        res.status(200).json({sucess:true,Data:{id:3,title:"Mens Casual Premium Slim Fit T-Shirts",price:82.5,imageUrl:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}});
    }

// @desc Update product
//@route PUT/api/products
//@access public
const updateProduct=(req,res,next)=>
    {
        res.status(200).json({sucess:true,Data:{id:req.params.id,title:"Mens Cotton Jacket",price:89.5,imageUrl:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}});
    }
// @desc Delete product by id
//@route DELETE/api/products/:id
//@access public
    const deleteProduct=(req,res,next)=>
        {
            res.status(200).json({sucess:true,Data:{id:req.params.id,message:`successfully deleted product with id:${req.params.id}`}});
        }


    module.exports={getAllProducts,getProductById,createProduct,updateProduct,deleteProduct};