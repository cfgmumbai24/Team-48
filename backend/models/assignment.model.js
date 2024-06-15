import mongoose, { Schema } from 'mongoose';

// Define the assignment schema
const assignmentSchema = new Schema(
  {
    assignment_no: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
  }
);

// Create the model
export const Assignment = mongoose.model('Assignment', assignmentSchema);

// // Connect to MongoDB Atlas
// const uri = 'mongodb+srv://bjbhavyajain2004:FAzn2wK1dpSpCB7e@cluster0.rlhs6pt.mongodb.net/'; // Replace with your actual connection string
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
//       assignment_no: 1,
//       language: 'English',
//       level: 'sentence',
//       data: 'This is the data for assignment 1.',
//     },
//     {
//       assignment_no: 2,
//       language: 'Hindi',
//       level: 'word',
//       data: 'This is the data for assignment 2.',
//     },
//     {
//       assignment_no: 3,
//       language: 'Marathi',
//       level: 'para',
//       data: 'This is the data for assignment 3.',
//     },
//     // Add more dummy data as needed
//   ];

//   try {
//     await Assignment.insertMany(dummyData);
//     console.log('Dummy data added successfully');
//     mongoose.connection.close();
//   } catch (err) {
//     console.error('Error adding dummy data:', err);
//   }
// }
