import mongoose from 'mongoose';

const { Schema } = mongoose;

const assessmentResultSchema = new Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    assignmentNo: {
      type: Number,
      required: true,
    },
    audioFile: {
      type: String,
      // required: true,
    },
    score: {
      type: Number,
    },
    convertedText: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AssessmentResult = mongoose.model('AssessmentResult', assessmentResultSchema);

export default AssessmentResult;
