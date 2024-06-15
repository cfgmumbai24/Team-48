const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Endpoint to handle file upload
app.post('/upload', upload.single('audio'), (req, res) => {
  const filePath = req.file.path;
  const mp3Path = filePath.replace('.webm', '.mp3');

  ffmpeg(filePath)
    .toFormat('mp3')
    .on('end', () => {
      fs.unlinkSync(filePath); // Remove the original WebM file
      res.json({ message: 'File converted to MP3', mp3Path });
    })
    .on('error', (err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to convert file' });
    })
    .save(mp3Path);
});

// Endpoint to handle submit action from React app
app.post('/saveMp3', (req, res) => {
  // Handle saving MP3 file logic here, if needed
  res.json({ message: 'MP3 file saved successfully' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
