const dotenv=require("dotenv");
const express=require("express");

dotenv.config({path:'./config/config.env'});
const app=express();
PORT=process.env.PORT||9000;

const products=require('./route/product');
app.use('/api/products',products);

app.listen(PORT,()=>
    {
        console.log(`listening  on PORT : ${PORT}` )
    }

)
