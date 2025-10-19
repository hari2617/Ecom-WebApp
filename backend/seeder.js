import products from "./data/product.js";
import users from "./data/user.js";


import Product from "./model/productModel.js";
import User from "./model/userModel.js";


import connectDB from "./config/db.js";


connectDB();



const importData= async ()=>{

try{
        await User.deleteMany();
    await Product.deleteMany();

    const createUsers=await User.insertMany(users);


    const adminUserId=createUsers[0]._id;
    
    const sampleProducts=products.map((p)=>{
        return {...p,user:adminUserId};

    })


    await Product.insertMany(sampleProducts);

    console.log("Data imported!")
    process.exit();
}

catch(err){
    console.log(`Error : ${err}`);
    process.exit(1);
}

}


const destroyData=async ()=>{

    try{

        await User.deleteMany();
        await Product.deleteMany();

        console.log("Data Destroyed");

        process.exit();

    }
    catch(err){
        console.log(`Error : ${err}`);
        process.exit(1);
    }
}

if(process.argv[2]=='-d'){
    destroyData();
}else{
    importData();
}