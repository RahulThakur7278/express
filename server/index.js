import express, { json } from 'express';
//import mongoose from 'mongoose';
import router from './router/router.js';
 const app=express();
const port=5000;
app.use(express.json());

app.use("/api/v1",router);  

app.get("/",(req,res)=>{
    res.send('Hellow world')
})

 app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});