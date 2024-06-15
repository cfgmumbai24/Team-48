import mongoose,{Schema} from "mongoose";

const assessmentSchema= new Schema(
  {
    student_no:{
      type: Number,
      required: true,
    },
    student_name:{
      type: String,
      required: true,
    },
    teacher_no: {
      type: Number,
      required: true,
    },
    teacher_name: {
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
    convertedText:{
      type: String,
    },
    score:{
      type: Number,
    }

  }, 
  {
      timestamps: true
  }
)

export const Assessment = mongoose.model('Assessment', assessmentSchema);

// Connect to MongoDB Atlas
// const uri = "" ; // Replace with your actual connection string
// console.log(uri);
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected successfully');
//     // Add dummy data
//     addDummyData();
//   })
//   .catch(err => console.error('MongoDB connection error:', err));

// // Function to add dummy data
// async function addDummyData() {
//   const dummyData = [
//     {
//       student_no: 1,
//       student_name: 'John Doe',
//       teacher_no: 101,
//       teacher_name: 'Dr. Smith',
//       assignment_id: new mongoose.Types.ObjectId(),
//       audioFile: 'audio1.mp3',
//       convertedText: 'This is the converted text for audio1.',
//       score: 85,
//     },
//     {
//       student_no: 2,
//       student_name: 'Jane Doe',
//       teacher_no: 102,
//       teacher_name: 'Prof. Johnson',
//       assignment_id: new mongoose.Types.ObjectId(),
//       audioFile: 'audio2.mp3',
//       convertedText: 'This is the converted text for audio2.',
//       score: 90,
//     },
//     // Add more dummy data as needed
//   ];

//   try {
//     await Assessment.insertMany(dummyData);
//     console.log('Dummy data added successfully');
//     mongoose.connection.close();
//   } catch (err) {
//     console.error('Error adding dummy data:', err);
//   }
// }