const { default: mongoose } = require("mongoose");
const courses=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})
module.exports= mongoose.model('Course',courses);