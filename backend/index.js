import dotenv from "dotenv"
import connectDB from "./db/connectDB.js"
import {app} from './app.js'

dotenv.config()

const port=process.env.PORT||4000

console.log(process.env.MONGO_DB_URI)

connectDB().then(()=>{
  app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
  })
})
.catch(()=>{
  console.log(`DB connection failed`);
})