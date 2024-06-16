import { useState, useEffect } from 'react';
import { useVoiceVisualizer, VoiceVisualizer } from 'react-voice-visualizer';
// import axios from 'axios';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import axios from 'axios';
import './Dashboard.css';
// import './App.css'; // Ensure you have basic styles

const Dashboard = () => {

  const sendFilePathToBackend = async (filePath) => {
    try {
      const response = await axios.post('http://localhost:3000/send_mp3_path', {
        filePath: filePath
      });

      console.log('Response from backend:', response.data);
      // Handle response as needed
    } catch (error) {
      console.error('Error sending file path:', error);
      // Handle error
    }
  };

  // // Usage example
  // const filePath = '/uploads/1623871777123-audio.mp3'; // Example path (adjust to match your actual file path)
  // sendFilePathToBackend(filePath);

  const recorderControls = useVoiceVisualizer();
  const { startRecording, stopRecording, recordedBlob, error } = recorderControls;

  const [isRecording, setIsRecording] = useState(false); // Track recording state
  const [uploadStatus, setUploadStatus] = useState('idle'); // Track upload progress
  const [recordedAudioUrl, setRecordedAudioUrl] = useState(null); // Store audio URL
  const [view, setView] = useState('userInfo');
  const userInfo = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    // Add more user information as needed
  };

  const startAssessment = () => {
    setView('assessment'); // Change view to assessment
  };

  useEffect(() => {
    // Create a temporary URL for the recorded audio (if any)
    if (recordedBlob) {
      const audioURL = URL.createObjectURL(recordedBlob);
      console.log(audioURL);
      setRecordedAudioUrl(audioURL);
    } else {

      setRecordedAudioUrl(null); // Clear URL when recording stops/clears
    }

    // Clean up the temporary URL when the component unmounts
    return () => URL.revokeObjectURL(recordedAudioUrl);
  }, [recordedBlob]);

  const submitAudio = async () => {
    if (!recordedBlob) {
      console.warn('No audio recorded yet. Please record audio before submitting.');
      return;
    }

    setUploadStatus('uploading'); // Indicate upload in progress

    const formData = new FormData();
    formData.append('audioFile', recordedBlob, 'recording.webm'); // Specify filename

    try {
      const response = await axios.post('http://localhost:3000/submitMp3', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(`Upload progress: ${percentCompleted}%`); // Optional progress indicator
        },
      });
      console.log('Upload successful:', response.data);
      setUploadStatus('success');
    } catch (error) {
      console.error('Error uploading audio:', error);
      setUploadStatus('error'); // Indicate upload error
    }
  };

  let userData=localStorage.getItem("userData")
  userData=JSON.parse(userData);

  return (
    <div className="Apph">
      <Header />
      <div className="App">
        {view === 'userInfo' ? (
          <div class='container'>
            <h1>STUDENT DETAILS</h1>
            <p>Name: {userData.studentName}</p>
            <p>Language: {userData.language}</p>
            <p>grade: {userData.grade}</p>
            {/* Add more user information as needed */}
            <button onClick={startAssessment}>Start Assessment</button>
            
          </div>
        
        ) : (
          <div>
            <div className="App-header">
              <div className ="mainText">Hello ji</div>
              {/* <h1 className ="voice-name">Voice Recorder</h1> */}
              {/* <button onClick={() => { setIsRecording(true); startRecording(); }} disabled={isRecording}>
                Start Recording
              </button> */}
              {/* <button onClick={() => { setIsRecording(false); stopRecording(); }} disabled={!isRecording}>
                Stop Recording
              </button> */}
              <VoiceVisualizer controls={recorderControls} />
              <button onClick={submitAudio} >
                Submit Audio
              </button>
            </div>
            {uploadStatus === 'uploading' && <p>Uploading audio...</p>}
            {uploadStatus === 'error' && <p>Error uploading audio. Please try again.</p>}
            {uploadStatus === 'success' && <p>Audio uploaded successfully!</p>}

            {/* Optional Audio Preview (if supported by browser) */}
            {recordedAudioUrl && (
              <audio controls src={recordedAudioUrl}>
                Your browser does not support the audio element.
              </audio>
            )}
           
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;