// Result.js
import React from 'react';
import './Result.css'; // Ensure you create and style this CSS file as needed

const Result = ({ resultData }) => {
  // Define the pass threshold
  const passThreshold = 50;
  
  // Determine if the result is a pass or fail
  const isPass = resultData.score > passThreshold;
  
  // Define the messages
  const passMessage = "Congratulations! You have passed the assessment.";
  const failMessage = "Unfortunately, you did not pass the assessment. Please try again.";

  return (
    <div className="result-container">
      <h1>Assessment Results</h1>
      {/* Render result data */}
      <p>Score: {resultData.score}</p>
      <p>Comments: {resultData.comments}</p>
      {/* Display pass/fail message */}
      <p className={isPass ? 'pass-message' : 'fail-message'}>
        {isPass ? passMessage : failMessage}
      </p>
      {/* Add more result information as needed */}
    </div>
  );
};

export default Result;
