import React, { useState } from 'react';
import axios from 'axios';
import './AssessmentForm.css';
import { useNavigate } from 'react-router-dom';

function AssessmentForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    language: 'english',
    grade: '',
    level: '',
    assignmentNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add username to formData if needed
    console.log(formData)
    const dataToSend = {
      ...formData,
      // Assuming username is 's', replace it with the actual value if required
    };

    try {
      const response = await axios.post('http://localhost:3000/assessments/assessment-results', formData);
      if (response.status === 201) {
        console.log('Data submitted successfully:', response);
        history('/Dashboard');
      } else {
        console.error('Failed to submit data:', response.data);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const history = useNavigate();

  return (
    <form className="assessment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="studentName">Name:</label>
        <select
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        >
          <option value="">Select Name</option>
          <option value="Aarav Sharma">Aarav Sharma</option>
      <option value="Vivaan Patel">Vivaan Patel</option>
      <option value="Aditya Rao">Aditya Rao</option>
      <option value="Vihaan Singh">Vihaan Singh</option>
      <option value="Arjun Mehta">Arjun Mehta</option>
      <option value="Sai Kumar">Sai Kumar</option>
      <option value="Reyansh Gupta">Reyansh Gupta</option>
      <option value="Krishna Sharma">Krishna Sharma</option>
      <option value="Ishaan Pandey">Ishaan Pandey</option>
      <option value="Atharv Jain">Atharv Jain</option>
      <option value="Ayaan Roy">Ayaan Roy</option>
      <option value="Ansh Yadav">Ansh Yadav</option>
      <option value="Kabir Reddy">Kabir Reddy</option>
      <option value="Aarush Nair">Aarush Nair</option>
      <option value="Aaryan Shah">Aaryan Shah</option>
      <option value="Aryan Pillai">Aryan Pillai</option>
      <option value="Dhruv Patel">Dhruv Patel</option>
      <option value="Arnav Menon">Arnav Menon</option>
      <option value="Ritvik Deshmukh">Ritvik Deshmukh</option>
      <option value="Aayush Mishra">Aayush Mishra</option>
      <option value="Raghav Kapoor">Raghav Kapoor</option>
      <option value="Atharva Rao">Atharva Rao</option>
      <option value="Parth Joshi">Parth Joshi</option>
      <option value="Arush Varma">Arush Varma</option>
      <option value="Riaan Chatterjee">Riaan Chatterjee</option>
      <option value="Aarav Malhotra">Aarav Malhotra</option>
      <option value="Shivansh Reddy">Shivansh Reddy</option>
      <option value="Anay Iyer">Anay Iyer</option>
      <option value="Advait Kaur">Advait Kaur</option>
      <option value="Aarush Sharma">Aarush Sharma</option>
      <option value="John Doe">John Doe</option>

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
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
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
          <option value="word">Word</option>
          <option value="sentence">Sentence</option>
          <option value="para">Para</option>
          {/* Add more levels as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="assignmentNo">Assignment ID:</label>
        <input
          type="number"
          id="assignmentNo"
          name="assignmentNo"
          value={formData.assignmentNo}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default AssessmentForm;
