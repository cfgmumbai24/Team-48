// import React, { useState } from 'react';
// import './AssessmentForm.css';

// function AssessmentForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     rollNo: '',
//     language: 'english',
//     grade: '',
//     assignmentId: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <form className="assessment-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Student's Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="language">Language to take assessment in:</label>
//         <select
//           id="language"
//           name="language"
//           value={formData.language}
//           onChange={handleChange}
//         >
//           <option value="english">English</option>
//           <option value="hindi">Hindi</option>
//           <option value="marathi">Marathi</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="grade">Grade:</label>
//         <input
//           type="text"
//           id="grade"
//           name="grade"
//           value={formData.grade}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="assignmentId">Assignment ID:</label>
//         <input
//           type="text"
//           id="assignmentId"
//           name="assignmentId"
//           value={formData.assignmentId}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit" className="submit-button">Submit</button>
//     </form>
//   );
// }

// export default AssessmentForm;
import React, { useState } from 'react';
import './AssessmentForm.css';

function AssessmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    language: 'english',
    grade: '',
    level: '',
    assignmentId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save formData to JSON format (for backend)
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
    // You can send formDataJson to backend or further processing here
  };

  return (
    <form className="assessment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <select
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        >
          <option value="">Select Name</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          <option value="Michael Brown">Michael Brown</option>
          {/* Add more options as needed */}
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="marathi">Marathi</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="grade">Grade:</label>
        <select
          id="grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
        >
          <option value="">Select Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          {/* Add more grades as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="level">Level:</label>
        <select
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          {/* Add more levels as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="assignmentId">Assignment ID:</label>
        <input
          type="number"
          id="assignmentId"
          name="assignmentId"
          value={formData.assignmentId}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default AssessmentForm;
