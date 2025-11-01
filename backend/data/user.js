import bcrypt from "bcrypt"

const users=[

    {
        name:"Srihari",
        email:"hari2612007@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:true
    },

    {
        name:"Steeve",
        email:"steeve@gmail.com",
       password:bcrypt.hashSync("123456", 10),
        isAdmin:false
    },

    {
        name:"zara",
        email:"zara@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:false
    }
]


export default users;