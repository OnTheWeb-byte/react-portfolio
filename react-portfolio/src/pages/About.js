/* File: About.js
   Student Name: Abdulaziz
   StudentID: 301420861
   Date: 09/25/2025
*/
import React from 'react';

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div style={{ display:'flex', gap:'1rem', marginTop:'1rem', alignItems:'center' }}>
        <img 
            src="/assets/headshot.jpeg" 
            alt="My Headshot" 
            style={{ width: 150, borderRadius: '50%' }} 
            />

        <div>
          <p><strong>Name:</strong> Abdulaziz Islam </p>
          <p> I am currently pursuing my career in Software Engineering with a strong interest in the integration of Artificial Intelligence. I am studying at Centennial College, where I am building a solid foundation in software development, problem-solving, and emerging technologies. My goal is to leverage my technical skills and passion for AI to contribute to innovative solutions that drive efficiency, intelligence, and real-world impact in the tech industry.</p>
          <p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download my Resume (PDF)</a>
          </p>
        </div>
      </div>
    </section>
  );
}
