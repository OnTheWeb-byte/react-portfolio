/* File: Logo.js
   Student Name: Abdulaziz
   StudentID: 301420861
   Date: 09/25/2025
*/
import React from 'react';

export default function Logo({ initials = 'AI' }) {
  return (
    <svg width="48" height="48" viewBox="0 0 100 100" aria-label="Site logo">
      <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="skyblue" />
      <text x="50" y="62" fontSize="36" textAnchor="middle" fill="#ffffffff" fontFamily="Arial" fontWeight="700">
        {initials}
      </text>
    </svg>
  );
}
