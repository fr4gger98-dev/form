import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    state: "",
    city: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form data:", formData);
    alert("Your enquiry has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      service: "",
      state: "",
      city: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-info">
          <span>Contact Us</span>

          <h1>Let’s Discuss Your Requirements</h1>

          <p>
            Fill in the form and our team will connect with you regarding your
            selected service.
          </p>

          <div className="contact-highlight">
            <h3>How can we help you?</h3>
            <p>
              We provide professional digital and technology solutions based on
              your business requirements.
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send an Enquiry</h2>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>

              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Select Service</label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Choose a service</option>
                <option value="Web Development">Web Development</option>
                <option value="ERP Solutions">ERP Solutions</option>
                <option value="CRM Solutions">CRM Solutions</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Git Support">Git Support</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>

              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>

              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your requirements"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;