import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', padding: '1.5rem'}}>
      <h1 style={{marginBottom: '12px' }}>Oops! Something went wrong!</h1>
      <p>We apologize for the inconvenience. It seems there's an issue with our transport service.</p>
      <img
        src="assets/images/error/404-Error-Design.png" // Replace with the URL of an appropriate error image
        alt="Error Illustration"
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
      />
      <p>Please try again later or contact our support team for assistance.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ marginRight: '20px' }}>
          Go to Homepage
        </Link>
        <Link to="/contact">Contact Support</Link>
      </div>
    </div>
  );
}

