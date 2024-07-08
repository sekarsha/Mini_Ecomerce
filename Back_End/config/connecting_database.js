const mongoose=require("mongoose");


const connectdatabase=()=>{
  
    mongoose.connect(process.env.DB_URL).then((con)=>{

        console.log("Mongo db is connected"+con.connection.host);
    })

}

module.exports=connectdatabase;