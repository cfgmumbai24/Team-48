import mongoose from "mongoose"

const connectDB=async()=>{
  try{
    const connectionInstance= await mongoose.connect(`${process.env.MONGO_DB_URI}`)
    console.log(`Database Connected. DB Host: ${connectionInstance.connection.host}`)
  }
  catch(error){
    console.log(`Database connection failed: ${error}`)
    process.exit(1);
  }
}

export default connectDB