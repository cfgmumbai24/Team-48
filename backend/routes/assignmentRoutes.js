import express from 'express';
import { getAssignmentByNumber } from '../controllers/assignmentController.js';


const router = express.Router();

// Route to get assignment details by assignment number
router.get('/:assignment_no', getAssignmentByNumber);

export default router;
