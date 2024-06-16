import AssessmentResult from '../models/assessmentResult.model.js'; // Adjust the path as needed

// Controller to create a new assessment result
const createAssessmentResult = async (req, res) => {
  console.log(req.body);
  try {
    const {
      studentName,
      language,
      grade,
      level,
      assignmentNo,
      audioFile,
      score,
      convertedText,
    } = req.body;

    const assessmentResult = new AssessmentResult({
      studentName,
      language,
      grade,
      level,
      assignmentNo,
      audioFile,
      score,
      convertedText,
    });

    const savedAssessmentResult = await assessmentResult.save();

    res.status(201).json(savedAssessmentResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all assessment results
const getAllAssessmentResults = async (req, res) => {
  try {
    const assessmentResults = await AssessmentResult.find();
    res.status(200).json(assessmentResults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a specific assessment result by ID
const getAssessmentResultById = async (req, res) => {
  try {
    const { id } = req.params;
    const assessmentResult = await AssessmentResult.findById(id);
    if (!assessmentResult) {
      return res.status(404).json({ message: 'Assessment result not found' });
    }
    res.status(200).json(assessmentResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a specific assessment result by ID
const updateAssessmentResultById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAssessmentResult = await AssessmentResult.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedAssessmentResult) {
      return res.status(404).json({ message: 'Assessment result not found' });
    }
    res.status(200).json(updatedAssessmentResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a specific assessment result by ID
const deleteAssessmentResultById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAssessmentResult = await AssessmentResult.findByIdAndDelete(id);
    if (!deletedAssessmentResult) {
      return res.status(404).json({ message: 'Assessment result not found' });
    }
    res.status(200).json(deletedAssessmentResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createAssessmentResult,
  getAllAssessmentResults,
  getAssessmentResultById,
  updateAssessmentResultById,
  deleteAssessmentResultById,
};
