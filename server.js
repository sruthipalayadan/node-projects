const dotenv=require("dotenv");
const express=require("express");
const errorHandler=require("./middleware/errorHandler");
dotenv.config({path:'./config/config.env'});
const app=express();
app.use(express.json());
PORT=process.env.PORT||9000;

const users=require('./route/users');
app.use('/api/auth',users);

const products=require('./route/product');
app.use('/api/products',products);

app.use(errorHandler);
app.listen(PORT,()=>
    {
        console.log(`listening  on PORT : ${PORT}` )
    }

)
