import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="error-page-container">
      <div className="error-content">
        <div className="error-animation">
          <div className="error-code">{error.status}</div>
          <div className="error-icon">🍔</div>
        </div>

        <h1 className="error-title">{error.statusText}</h1>
        
        <p className="error-subtitle">
          We can't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
        </p>

        <div className="error-suggestions">
          <p className="suggestion-title">What you can do:</p>
          <ul className="suggestion-list">
            <li>Check the URL in your browser</li>
            <li>Go back to the home page</li>
            <li>Contact us for assistance</li>
          </ul>
        </div>

        <div className="error-actions">
          <button className="error-home-btn" onClick={() => navigate("/")}>
            🏠 Go Home
          </button>
          <button className="error-back-btn" onClick={() => navigate(-1)}>
            ⬅️ Go Back
          </button>
        </div>

        <div className="error-footer">
          <p>Need help? <a href="/contact" className="error-contact-link">Contact Us</a></p>
        </div>
      </div>

      <div className="error-decoration">
        <div className="floating-item">🍕</div>
        <div className="floating-item">🍜</div>
        <div className="floating-item">🍱</div>
        <div className="floating-item">🍰</div>
      </div>
    </div>
  );
};

export default Error;