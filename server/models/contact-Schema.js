

const mongoose=require("mongoose");
const { string } = require("zod");

const contactSch=new mongoose.Schema({

        username:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true
        },

        message:{
            type:String,
            required:true
        },

});

const Contact=new mongoose.model("Contact",contactSch);

module.exports=Contact;