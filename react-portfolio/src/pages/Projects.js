/* File: Projects.js
   Student Name: Abdulaziz
   StudentID: 301420861
   Date: 09/25/2025
*/
import './Projects.css';
import React from 'react';
const projects = [
  { id: 1, title: 'CINFLIX HUB', img: '/assets/CINFLIX HUB.jpg.jpeg', role: 'Front-end Website', desc: '• Movie discovery platform Developed using JavaScript, HTML, and C • Responsive Design: Adding glowing hover effects' },
  { id: 2, title: 'RATE ME SURVEY', img: '/assets/RATE ME SURVEY.jpg.jpeg', role: 'Front-end Website', desc: '• Course evaluation platform using HTML & CSS for simplicity wise •Designed to navigate easily to keep it as simple as possible for both user and developer.' },
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {projects.map(proj => (
    <article key={proj.id} className="project-card">
        <img src={proj.img} alt={proj.title} style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 6 }} />
        <h3 style={{ marginTop: 8 }}>{proj.title}</h3>
        <p style={{ fontStyle: 'italic' }}>{proj.role}</p>
        <p>{proj.desc}</p>
    </article>

        ))}
      </div>
    </section>
    
  );
}

