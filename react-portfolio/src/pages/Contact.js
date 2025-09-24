/* File: Contact.js
   Student Name: Abdulaziz
   StudentID: 301420861
   Date: 09/25/2025
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({ firstName:'', lastName:'', phone:'', email:'', message:'' });
  const navigate = useNavigate();

  
  function handleChange(e){
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e){
    e.preventDefault();
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({ ...formData, submittedAt: new Date().toISOString() });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    console.log('Captured contact message:', formData);

    navigate('/');
  }

  return (
    <section>
      <h2>Contact Me</h2>

      <div style={{ display:'flex', gap:'1rem', marginTop:'1rem' }}>
        <div style={{ flex:1 }}>
          <form onSubmit={handleSubmit}>
            <div><label>First Name<input name="firstName" value={formData.firstName} onChange={handleChange} required/></label></div>
            <div><label>Last Name<input name="lastName" value={formData.lastName} onChange={handleChange} required/></label></div>
            <div><label>Contact Number<input name="phone" value={formData.phone} onChange={handleChange} /></label></div>
            <div><label>Email<input name="email" type="email" value={formData.email} onChange={handleChange} required/></label></div>
            <div><label>Message<textarea name="message" value={formData.message} onChange={handleChange} required/></label></div>
            <div style={{ marginTop:8 }}>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

        <aside style={{ width:320, background:'#fff', padding:12, borderRadius:8 }}>
          <h3>Contact Info</h3>
          <p>Email: icanadian2004@gmail.com</p>
          <p>Phone: (473)351-2005 </p>
          <p>Location: Toronto, ON</p>
        </aside>
      </div>
    </section>
  );
}
