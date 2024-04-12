const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username:{
        require: true,
        type : String
    },
    password:{
        require:true,
        type: String
    }
})

const userModel = mongoose.model("user",user);

module.exports = {
    userModel
}