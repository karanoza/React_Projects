import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add API call to send the form data
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch with Us</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Our Location</h3>
            <p>123 Food Street, Culinary City, CC 12345</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone Number</h3>
            <p>+1 (555) 123-4567</p>
            <p className="small-text">Mon-Fri: 9AM - 6PM</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email Address</h3>
            <p>hello@fooddelivery.com</p>
            <p className="small-text">We'll respond within 24 hours</p>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your inquiry..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>

      <div className="contact-footer">
        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              f
            </a>
            <a href="#" className="social-icon">
              𝕏
            </a>
            <a href="#" className="social-icon">
              📷
            </a>
            <a href="#" className="social-icon">
              💼
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
