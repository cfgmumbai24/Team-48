import express from 'express';
import {
  createAssessmentResult,
  getAllAssessmentResults,
  getAssessmentResultById,
  updateAssessmentResultById,
  deleteAssessmentResultById,
} from '../controllers/assessmentController.js'; // Adjust the path as needed

const router = express.Router();

// Route to create a new assessment result
router.post('/assessment-results', createAssessmentResult);

// Route to get all assessment results
router.get('/assessment-results', getAllAssessmentResults);

// Route to get a specific assessment result by ID
router.get('/assessment-results/:id', getAssessmentResultById);

// Route to update a specific assessment result by ID
router.put('/assessment-results/:id', updateAssessmentResultById);

// Route to delete a specific assessment result by ID
router.delete('/assessment-results/:id', deleteAssessmentResultById);

export default router;
