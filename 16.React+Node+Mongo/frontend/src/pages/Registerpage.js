import React, { useState } from 'react';
import axios from 'axios';
import './Registerpage.css'; // ✅ Import CSS

function Registerpage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/api/form', formData);
      window.location.href = "/login";
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Submission failed');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Registerpage;
