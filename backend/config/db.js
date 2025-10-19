

import mongoose from "mongoose";


const connectDB= async ()=>{

    try{


        const connect=await mongoose.connect("");
        console.log(`mongoDB connected successfully`);


    }catch(err){


        console.log(`error found!: ${err}`);
        process.exit(1);



    }
}

export default connectDB;