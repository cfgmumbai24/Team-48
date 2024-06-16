import express from  "express"
import cors from "cors"
import multer from 'multer';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
// import Assessment from './models/Assessment.js'; // Import the Assessment model

const app=express();

app.use(cors());
app.use(express.json());

import assignmentRoutes from './routes/assignmentRoutes.js';
import assessmentRoutes from './routes/assessmentRoutes.js'; 
import studentRoutes from './routes/studentRoutes.js'
import AssessmentResult from "./models/assessmentResult.model.js";
// import userRoutes from "./routes/user.routes.js"

app.get("/",(req,res)=>{
  res.send("hello")
})

// app.use("/user",userRoutes)
app.use('/assignments', assignmentRoutes);
app.use('/assessments', assessmentRoutes);
app.use('/api', studentRoutes);

const uploadDir = '/Users/bhavyajain/Desktop/CFG2024/Team-48/backend/upload';

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

// Endpoint to handle file upload and create assessment record
app.post('/submitmp3', upload.single('audioFile'), async (req, res) => {
  if (!req.file) {
    // No file uploaded
    return res.status(400).json({ message: 'No file uploaded' });
  }
  
  try {
    // Create a new assessment record
    const newAssessment = await AssessmentResult.create({
      studentName: req.body?.studentName||"Rahul",
      language: req.body?.language||"Hindi",
      grade: req.body?.grade||"3",
      level: req.body?.level||"para",
      assignmentNo: req.file?.assignmentNo||"1",
      audioFile: req.file.filename, // Store the filename in the assessment record
    });

    console.log('Assessment created:', newAssessment);
    res.json({ message: 'File uploaded and assessment created successfully', assessment: newAssessment });
  } catch (err) {
    console.error('Error creating assessment:', err);
    res.status(500).json({ message: 'Error creating assessment', error: err.message });
  }
});

export { app };