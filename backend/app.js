import express from  "express"
import cors from "cors"

const app=express();

app.use(cors());
app.use(express.json());

import assignmentRoutes from './routes/assignmentRoutes.js';
import assessmentRoutes from './routes/assessmentRoutes.js'; 
import studentRoutes from './routes/studentRoutes.js'
// import userRoutes from "./routes/user.routes.js"

app.get("/",(req,res)=>{
  res.send("hello")
})

// app.use("/user",userRoutes)
app.use('/assignments', assignmentRoutes);
app.use('/assessments', assessmentRoutes);
app.use('/api', studentRoutes);

export {app}