import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_kd25eg9", // Replace with your EmailJS Service ID
        "template_2wljuus", // Replace with your EmailJS Template ID
        formData,
        "fpEq98yRMex5yj7IN" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-95 mt-5 mb-5"
      // Background color applied here
    >
      <div
        className="p-3 "
        style={{
          width: "350px",
          backgroundColor: "#1b1a2ea9",
          color: "#049bff",
        }} // Adjust width for a smaller box
      >
        <h2 className="text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="p-4  ">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: "#049bff" }}
          >
            Send Message
          </button>
          {status && <p className="mt-3 text-center">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
