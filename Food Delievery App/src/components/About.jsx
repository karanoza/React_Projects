import { useNavigate } from "react-router-dom";
import  User from "./User";
import UserClass from "./UserClass";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
        <h1>About Our Food Delivery App</h1>
      </div>
  <User name={"Karan Oza"} />
  <UserClass name={"Karan Oza ka class"} />
      <div className="about-content">
        <section className="about-section">
          <h2>🎯 Our Mission</h2>
          <p>
            We're dedicated to bringing your favorite food to your doorstep with
            speed, reliability, and care. Our mission is to make food delivery
            convenient, affordable, and enjoyable for everyone.
          </p>
        </section>

        <section className="about-section">
          <h2>🚀 What We Offer</h2>
          <ul>
            <li>Wide variety of restaurants and cuisines</li>
            <li>Fast and reliable delivery services</li>
            <li>Real-time order tracking</li>
            <li>Secure payment options</li>
            <li>24/7 customer support</li>
            <li>Exclusive deals and discounts</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>👥 Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <h3>Lightning Fast</h3>
              <p>Average delivery time under 30 minutes</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🤝</span>
              <h3>Trusted Partner</h3>
              <p>Partnered with 5000+ restaurants</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💰</span>
              <h3>Best Prices</h3>
              <p>Competitive pricing with regular offers</p>
            </div>
            <div className="feature">
              <span className="feature-icon">📱</span>
              <h3>Easy to Use</h3>
              <p>Simple and intuitive app interface</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>📞 Get in Touch</h2>
          <div className="contact-info">
            <p>
              <strong>Email:</strong> support@fooddeliveryapp.com
            </p>
            <p>
              <strong>Phone:</strong> 1-800-FOODAPP (1-800-366-3277)
            </p>
            <p>
              <strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94025
            </p>
          </div>
        </section>

        <section className="about-section team-section">
          <h2>👨‍💼 Our Team</h2>
          <p>
            We're a passionate team of food enthusiasts, tech experts, and
            customer service professionals committed to delivering excellence
            every day. Together, we're revolutionizing the food delivery experience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
