import { useState, useEffect } from 'react';
import { useVoiceVisualizer, VoiceVisualizer } from 'react-voice-visualizer';
import axios from 'axios';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

// import './App.css'; // Ensure you have basic styles

const Dashboard = () => {
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

  return (
    <div className="App">
        <Header/>
        <div className="App">
      {view === 'userInfo' ? (
        <div>
          <h1>User Information</h1>
          <p>Name: {userInfo.name}</p>
          <p>Age: {userInfo.age}</p>
          <p>Email: {userInfo.email}</p>
          {/* Add more user information as needed */}
          <button onClick={startAssessment}>Start Assessment</button>
        </div>
      ) : (
        <div>
          <header className="App-header">
          <div>
            <p>DUMMY TEXT</p>
        </div>
        <h1>Voice Recorder</h1>
        <button onClick={() => { setIsRecording(true); startRecording(); }} disabled={isRecording}>
          Start Recording
        </button>
        <button onClick={() => { setIsRecording(false); stopRecording(); }} disabled={!isRecording}>
          Stop Recording
        </button>
        <VoiceVisualizer controls={recorderControls} />
      </header>
      <button onClick={submitAudio} >
        Submit Audio
      </button>
      {uploadStatus === 'uploading' && <p>Uploading audio...</p>}
      {uploadStatus === 'error' && <p>Error uploading audio. Please try again.</p>}
      {uploadStatus === 'success' && <p>Audio uploaded successfully!</p>}

      {/* Optional Audio Preview (if supported by browser) */}
      {recordedAudioUrl && (
        <audio controls src={recordedAudioUrl}>
          Your browser does not support the audio element.
        </audio>
      )}
      <Footer/>
        </div>
      )}
    </div>     
    </div>
  );
};

export default Dashboard;