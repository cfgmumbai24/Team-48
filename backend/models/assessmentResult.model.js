import mongoose,{Schema} from "mongoose";

const assignSchema= new Schema(
  {
    student_no:{
      type: Number,
      required: true,
    },
    student_name:{
      type: String,
      required: true,
    },
    assignment_id:{
      type: Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },
    audioFile:{
      type: String,
      required: true,
    },
    score:{
      type: Number,
    }

  }, 
  {
      timestamps: true
  }
)

export const Assessment= mongoose.model("Assessment",assessmentSchema);