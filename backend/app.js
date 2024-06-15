import express from  "express"
import cors from "cors"
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

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

const uploadDir = 'C:/Users/Nehal Mahajan/OneDrive/Desktop/cfg/Team-48/backend/upload'; 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, 
});

// Endpoint to handle file upload
app.post('/submitmp3', upload.single('audioFile'), (req, res) => {
  if (!req.file) {
    // No file uploaded
    return res.status(400).json({ message: 'No file uploaded' });
  }
  
  // File uploaded successfully
  console.log('File uploaded:', req.file.filename);
  res.json({ message: 'File uploaded successfully' });
});

export {app}