import { Assignment } from '../models/assignment.model.js'; 

// Controller function to get assignment details by assignment number
export const getAssignmentByNumber = async (req, res) => {
  const assignment_no = req.params.assignment_no;

  try {
    const assignment = await Assignment.findOne({ assignment_no: assignment_no });

    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    res.json({
      language: assignment.language,
      level: assignment.level,
      data: assignment.data,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
