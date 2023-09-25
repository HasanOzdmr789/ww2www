const mongoose=require("mongoose");

const userDetailsSchema=new mongoose.Schema(
    {
        name:String,
        Surname:String,
        email:{type:String,unique:true},
        Password:String
    },
    {
        colloection:"UserInfo",
    }
)

mongoose.model("UserInfo",userDetailsSchema)