const express = require("express");
const router=express.Router();
const{ getAllProducts,getProductById,createProduct,updateProduct,deleteProduct}=require('../controller/product');
   


router.get('/',getAllProducts);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);
router.post('/',createProduct) ; 

 module.exports=router;