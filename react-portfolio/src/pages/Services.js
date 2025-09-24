/* File: Services.js
   Student Name: Abdulaziz
   StudentID: 301420861
   Date: 09/25/2025
*/

import React from 'react';

const services = [
  { id: 1, title: 'Web Development', img: '/assets/HTML.jpeg', desc: 'Building responsive, modern websites using React, HTML, CSS and JavaScript.' },
  { id: 2, title: 'Mobile Apps', img: '/assets/mobile.jpeg', desc: 'Designing and developing cross-platform mobile applications.' },
  { id: 3, title: 'SQL', img: '/assets/SQL.jpeg', desc: 'Creating quaries and database solutions.' },
];

export default function Services() {
  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Services</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {services.map(service => (
          <article 
            key={service.id} 
            style={{ 
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '1px solid #ddd'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
          >
            <img 
              src={service.img} 
              alt={service.title} 
              style={{ 
                width: '100%', 
                height: '160px', 
                objectFit: 'cover', 
                borderRadius: '8px' 
              }} 
            />
            <h3 style={{ marginTop: '1rem', fontSize: '1.3rem', color: '#333' }}>
              {service.title}
            </h3>
            <p style={{ color: '#666', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              {service.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

