import React, { useState } from 'react';
import axios from 'axios';
import './Registerpage.css'; // ✅ Import CSS

function Loginpage() {
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
      await axios.post('http://localhost:5000/api/formlogin', formData);
      // const data = await res.json();
      alert('Form submitted successfully!');
      localStorage.setItem("userEmail", formData.email);
      window.location.href = "/profile";
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Submission failed');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Login</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Loginpage;
