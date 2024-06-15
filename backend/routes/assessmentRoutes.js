import express from 'express';
import { getAssessmentAudioFile } from '../controllers/assessmentController.js';

const router = express.Router();

// Route to get assessment audio file by student roll number, assignment number, and teacher details
router.post('/getAudioFile', getAssessmentAudioFile);

export default router;
