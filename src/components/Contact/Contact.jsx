import { useState, useRef } from "react";
import "./Contact.css";

const SERVICES = [
  "Web Development",
  "ERP Solutions",
  "CRM Solutions",
  "Lead Generation",
  "Digital Marketing",
  "Git Support",
];

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
  { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
  { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "Enter your mobile number" },
];

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

  // idle -> sending -> sent
  const [status, setStatus] = useState("idle");
  const [focusField, setFocusField] = useState(null);
  const resetTimer = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (status !== "idle") return;

    setStatus("sending");
    console.log("Contact form data:", formData);

    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => {
      setStatus("sent");

      resetTimer.current = window.setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          service: "",
          state: "",
          city: "",
          message: "",
        });
        setStatus("idle");
      }, 1900);
    }, 1100);
  };

  return (
    <section className="contact-section">
      <div className="contact-blob contact-blob--one" aria-hidden="true" />
      <div className="contact-blob contact-blob--two" aria-hidden="true" />
      <div className="contact-blob contact-blob--three" aria-hidden="true" />

      <div className="contact-wrapper">
        <div className="contact-info">
          <span className="contact-eyebrow">
            Contact Us
            <span className="signal" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="signal-bar" style={{ "--i": i }} />
              ))}
            </span>
          </span>

          <h1>
            Let&rsquo;s Discuss Your
            <span className="contact-info-highlight-word"> Requirements</span>
          </h1>

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
            {FIELDS.map((field, index) => (
              <div
                className="form-group"
                key={field.name}
                style={{ "--delay": `${index * 70}ms` }}
              >
                <label htmlFor={field.name}>{field.label}</label>

                <div
                  className={`field-shell${
                    focusField === field.name ? " is-focused" : ""
                  }${formData[field.name] ? " is-filled" : ""}`}
                >
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocusField(field.name)}
                    onBlur={() => setFocusField(null)}
                    pattern={field.name === "mobile" ? "[0-9]{10}" : undefined}
                    maxLength={field.name === "mobile" ? "10" : undefined}
                    required
                  />
                  <span className="field-underline" />
                </div>
              </div>
            ))}

            <div className="form-group" style={{ "--delay": "210ms" }}>
              <label htmlFor="service">Select Service</label>

              <div
                className={`field-shell field-shell--select${
                  focusField === "service" ? " is-focused" : ""
                }${formData.service ? " is-filled" : ""}`}
              >
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocusField("service")}
                  onBlur={() => setFocusField(null)}
                  required
                >
                  <option value="">Choose a service</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <span className="field-chevron" aria-hidden="true" />
                <span className="field-underline" />
              </div>
            </div>

            <div className="form-group" style={{ "--delay": "280ms" }}>
              <label htmlFor="state">State</label>
              <div
                className={`field-shell${
                  focusField === "state" ? " is-focused" : ""
                }${formData.state ? " is-filled" : ""}`}
              >
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                  onFocus={() => setFocusField("state")}
                  onBlur={() => setFocusField(null)}
                  required
                />
                <span className="field-underline" />
              </div>
            </div>

            <div className="form-group" style={{ "--delay": "350ms" }}>
              <label htmlFor="city">City</label>
              <div
                className={`field-shell${
                  focusField === "city" ? " is-focused" : ""
                }${formData.city ? " is-filled" : ""}`}
              >
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  onFocus={() => setFocusField("city")}
                  onBlur={() => setFocusField(null)}
                  required
                />
                <span className="field-underline" />
              </div>
            </div>

            <div className="form-group full-width" style={{ "--delay": "420ms" }}>
              <label htmlFor="message">Message</label>
              <div
                className={`field-shell${
                  focusField === "message" ? " is-focused" : ""
                }${formData.message ? " is-filled" : ""}`}
              >
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your requirements"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusField("message")}
                  onBlur={() => setFocusField(null)}
                  required
                />
                <span className="field-underline" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`submit-btn is-${status}`}
            disabled={status !== "idle"}
          >
            <span className="submit-btn-label submit-btn-label--idle">
              Submit Enquiry
            </span>
            <span className="submit-btn-label submit-btn-label--sending">
              <span className="spinner" aria-hidden="true" />
              Sending
            </span>
            <span className="submit-btn-label submit-btn-label--sent">
              <svg
                className="check-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="check-icon-path"
                  d="M4 12.5L9.5 18L20 6"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Enquiry Sent
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;