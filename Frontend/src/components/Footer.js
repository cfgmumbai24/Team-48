import React, { useEffect } from 'react';
import './Footer.css';
import axios from 'axios';

// const apiUrl = "https://localhost:7000?studentName=Nehal"

function Footer() {

    // useEffect(()=>{
    //     backendEndCall();
    // },[])
    
    // const backendEndCall = () => {
    
    // axios.get(apiUrl)
    //   .then(response => {
    //     // Handle the successful response here
    //     console.log('Response data:', response.data);
    //   })
    //   .catch(error => {
    //     // Handle any errors that occur during the request
    //     console.error('Error fetching data:', error);
    //   });
    // }
    
  return (
    <footer className="footer">
      <p>Contact us at: example@example.com | +123 456 7890</p>
    </footer>
  );
}

export default Footer;
