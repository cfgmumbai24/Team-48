import express from 'express';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  createManyStudents,
  getStudentByName,
} from '../controllers/studentController.js'; // Replace with the actual path to your controller

const router = express.Router();

// Route to create a new student
router.post('/students', createStudent);

// Route to create multiple students
router.post('/students/many', createManyStudents);

// Route to get all students
router.get('/students', getAllStudents);

// Route to get a student by ID
router.get('/students/:id', getStudentById);

// Route to update a student by ID
router.put('/students/:id', updateStudentById);

// Route to delete a student by ID
router.delete('/students/:id', deleteStudentById);

// Route to get student details by name
router.get('/students/name', getStudentByName);

export default router;
