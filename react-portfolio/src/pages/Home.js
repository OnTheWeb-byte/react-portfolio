/* File: Home.js
   Student Name: Abdulaziz
   StudentID: 301420861
   Date: 09/25/2025
*/

import React from 'react';

export default function Home() {
  return (
    <section 
      style={{ 
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f0f4ff, #e8f7ff)'
      }}
    >
      {/* Logo */}
      <div 
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: '#6bb7ffff',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        AI
      </div>

      {/* Welcome Text */}
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
        Welcome to My Portfolio
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', marginBottom: '2rem' }}>
        I’m <strong>Abdulaziz</strong>. I’m passionate about creating modern, responsive web
        and mobile applications. Explore my projects, services, and get in touch!
      </p>

      {}
      <p style={{ 
        fontSize: '1.1rem', 
        color: '#444', 
        fontStyle: 'italic', 
        marginBottom: '2rem',
        maxWidth: '600px'
      }}>
        "My mission is to build user-friendly, accessible, and innovative solutions."
      </p>

      
      <a 
        href="/about" 
        style={{
          background: '#5eacffff',
          color: '#fff',
          textDecoration: 'none',
          padding: '0.8rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: 'background 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#68a7faff'}
        onMouseLeave={e => e.currentTarget.style.background = '#4aa2ffff'}
      >
        About Me
      </a>
    </section>
  );
}

