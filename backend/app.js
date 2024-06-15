import express from  "express"
import cors from "cors"

const app=express();

app.use(cors());
app.use(express.json());


// import userRoutes from "./routes/user.routes.js"

app.get("/",(req,res)=>{
  res.send("hello")
})

// app.use("/user",userRoutes)

export {app}