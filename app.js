const express = require('express');
require('dotenv').config();
const connetDB = require('./data');
const genreRouter = require('./router/genreRouter');
const productRouter = require('./router/productRouter');
const userRouter = require("./router/userRouter");

const Product = require('./model/product')

const app = express();
connetDB();
app.use(express.json());
app.use('/api/genre', genreRouter);
app.use('/api/product', productRouter);
app.use('/api/user',userRouter);

app.get("/search/:key",async (req,resp)=>{
    let data = await Product.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {song:{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);
});


app.listen(process.env.port,() => {
    console.log(`server listen ${process.env.port}`);
});