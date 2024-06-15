import mongoose,{Schema} from "mongoose";

const assignmentSchema= new Schema(
  {
    assignment_no:{
      type: Number,
      required: true,
    },
    language:{
      type: String,
      required: true,
    },
    level:{
      type: String,
      required: true,
    },
    data:{
      type: String,
      required: true,
    }
  }
)

export const Assignment= mongoose.model("Assignment",assignmentSchema);