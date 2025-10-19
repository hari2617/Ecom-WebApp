//mongodb+srv://sriharibv24aid_db_user:<db_password>@ecom.ji7hu4y.mongodb.net/

import mongoose from "mongoose";


const connectDB= async ()=>{

    try{


        const connect=await mongoose.connect("mongodb+srv://srihari26:srihari2617@ecom.ji7hu4y.mongodb.net/ecom");
        console.log(`mongoDB connected successfully`);


    }catch(err){


        console.log(`error found!: ${err}`);
        process.exit(1);



    }
}

export default connectDB;