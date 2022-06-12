const mongoose = require("mongoose")




module.exports =()=>{
    mongoose.connect(process.env.CONNECTION_URL,  {
        useNewUrlParser : true,
        useUnifiedTopology :true
    
})
    mongoose.connection.on("open",()=>{console.log(`Mongo Db Connected.Server Running...`)})
    mongoose.connection.on("error",(err)=>{console.log("HATA:"+err)})
}