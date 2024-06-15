import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema(
  {
    student_name: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    word: {
      type: Boolean,
      default: false,
      required: true,
    },
    sentence: {
      type: Boolean,
      default: false,
      required: true,
    },
    para: {
      type: Boolean,
      default: false,
      required: true,
    },
    numbers: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model('Student', studentSchema);
