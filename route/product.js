const express = require("express");
const router=express.Router();
const{ getAllProducts,getProductById,createProduct,updateProduct,deleteProduct}=require('../controller/product');
   
const {verifyTokenHandler, verifyRoles}=require("../middleware/jwtHandler");

router.get('/',getAllProducts);
router.route('/:id').get(getProductById).put([verifyTokenHandler,verifyRoles(['admin'])],updateProduct).delete([verifyTokenHandler,verifyRoles(['admin'])],deleteProduct);
router.post('/',[verifyTokenHandler,verifyRoles(['admin'])],createProduct) ; 

 module.exports=router;