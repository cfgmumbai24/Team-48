import { Student } from "../models/student.model.js";

// Create a new student
export const createStudent = async (req, res) => {
  const { student_name, grade, word, sentence, para, numbers } = req.body;

  try {
    const newStudent = new Student({
      student_name,
      grade,
      word,
      sentence,
      para,
      numbers,
    });

    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Create multiple students
export const createManyStudents = async (req, res) => {
  const students = req.body;

  try {
    const savedStudents = await Student.insertMany(students);
    res.status(201).json(savedStudents);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get a student by ID
export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update a student by ID
export const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { student_name, grade, word, sentence, para, numbers } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { student_name, grade, word, sentence, para, numbers },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete a student by ID
export const deleteStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get student details by name
export const getStudentByName = async (req, res) => {
  const { name } = req.body;

  try {
    const student = await Student.findOne({ student_name: name });
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
