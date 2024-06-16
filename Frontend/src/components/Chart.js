import React from 'react';
import Chart from 'react-apexcharts';
import Header from './Header.js';
import Footer from './Footer.js';
import './Chart.css';

// Sample data for students' performance
const studentData = [
  {
    "_id": "666ddb7790985840b1f75505",
    "student_name": "Aarav Sharma",
    "grade": 3,
    "word": true,
    "sentence": true,
    "para": true,
    "numbers": false,
    "__v": 0,
    "createdAt": "2024-06-15T18:20:39.513Z",
    "updatedAt": "2024-06-15T18:20:39.513Z"
  },
  {
    "_id": "666ddb7790985840b1f75506",
    "student_name": "Vivaan Patel",
    "grade": 4,
    "word": true,
    "sentence": true,
    "para": false,
    "numbers": true,
    "__v": 0,
    "createdAt": "2024-06-15T18:20:39.513Z",
    "updatedAt": "2024-06-15T18:20:39.513Z"
  },
  // Add more student data as needed
];

// Dummy YouTube video links
const videoLinks = [
  { title: 'How to Improve Math Skills', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { title: 'Science Experiment Basics', url: 'https://www.youtube.com/watch?v=abcdef12345' },
  { title: 'Understanding History', url: 'https://www.youtube.com/watch?v=ghijkl67890' }
];

// Dummy blog links
const blogLinks = [
  { title: 'Top 10 Study Tips', url: 'https://example.com/blog1' },
  { title: 'How to Prepare for Exams', url: 'https://example.com/blog2' },
  { title: 'Effective Learning Strategies', url: 'https://example.com/blog3' }
];

const Charts = () => {
  // Line chart options
  const lineOptions = {
    chart: {
      id: 'line-chart'
    },
    xaxis: {
      categories: studentData.map(student => student.student_name)
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Grades of Students',
      align: 'left'
    }
  };

  const lineSeries = [{
    name: 'Grade',
    data: studentData.map(student => parseInt(student.grade))
  }];

  // Bar chart options
  const barOptions = {
    chart: {
      id: 'bar-chart'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xaxis: {
      categories: ['Word', 'Sentence', 'Paragraph', 'Numbers']
    }
  };

  const barSeries = [{
    name: 'Count',
    data: [
      studentData.filter(student => student.word).length,
      studentData.filter(student => student.sentence).length,
      studentData.filter(student => student.para).length,
      studentData.filter(student => student.numbers).length
    ]
  }];

  const getVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  return (
    <div className="charts-container">
      <Header />
      <div className="chart">
        <h2>Grades of Students</h2>
        <Chart options={lineOptions} series={lineSeries} type="line" width="100%" height={350} />
      </div>

      <div className="chart">
        <h2>Category Performance</h2>
        <Chart options={barOptions} series={barSeries} type="bar" width="100%" height={350} />
      </div>

      <div className="remedial-solutions">
        <h2>Remedial Solutions</h2>
        <ul>
          {videoLinks.map((video, index) => (
            <li key={index} className="video-link">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://img.youtube.com/vi/${getVideoId(video.url)}/0.jpg`}
                  alt={video.title}
                  className="thumbnail"
                />
                <span>{video.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-solutions">
        <h2>Related Blog Posts</h2>
        <ul>
          {blogLinks.map((blog, index) => (
            <li key={index} className="blog-link">
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                <span>{blog.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default Charts;
