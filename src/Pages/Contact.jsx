import React from 'react'
import Footer from '../components/Footer'
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Form submitted successfully!");
  };
  return (
<div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
  <h2 className="text-xl font-bold mb-4">Contact Us</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
    />
    <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
    ></textarea>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
    >
      Submit
    </button>
  </form>
  <Footer/>
</div>
  )
}

export default Contact
