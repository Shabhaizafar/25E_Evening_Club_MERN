import React, { useState } from 'react';
import axios from 'axios';

function Formroute(){
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
      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};


export default Formroute;