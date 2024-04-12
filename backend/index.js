const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");

const { userModel } = require("./mongo");

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb connected")
})
app.post('/check',async(req,res)=>{
    const user = req.body;
    const check = await userModel.findOne({username:user.username, password :user.password})
    if(check){
        res.json({
            mssg:"exist"
        })
    }else{
        res.json({
            mssg:"does not exist"
        })
    }
})
app.post('/save',async(req,res)=>{
    const user = req.body;
    
    const check = await userModel.findOne({username:user.username})
    if(check){
        res.json({
            mssg:"exist"
        })
    }else{
        res.json({
            mssg:"does not exist"
        })
        userModel.insertMany(user);
    }
})
app.listen(3000,()=>{
    console.log(`listening on port 3000`)
})
