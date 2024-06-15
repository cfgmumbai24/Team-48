import React, { useState } from 'react';
import './AssessmentForm.css';

function AssessmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    language: 'english',
    grade: '',
    assignmentId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="assessment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Student's Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="language">Language to take assessment in:</label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="marathi">Marathi</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          id="grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="assignmentId">Assignment ID:</label>
        <input
          type="text"
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
