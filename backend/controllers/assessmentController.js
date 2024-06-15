import { Assessment } from "../models/assessmentResult.model.js";

// Controller function to get assessment audio file by student roll number, assignment number, and teacher details
export const getAssessmentAudioFile = async (req, res) => {
  const { student_no, assignment_no, teacher_no, teacher_name } = req.body;

  try {
    const assessment = await Assessment.findOne({
      student_no: student_no,
      assignment_id: assignment_no,
      teacher_no: teacher_no,
      teacher_name: teacher_name
    }).populate('assignment_id');

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    res.json({
      audioFile: assessment.audioFile,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
