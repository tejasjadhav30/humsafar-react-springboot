import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, sendEmailVerification } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAu66y6qavx8pFMS4n9MgmNgctJaaJDIc",
  authDomain: "travelapplication-52054.firebaseapp.com",
  projectId: "travelapplication-52054",
  storageBucket: "travelapplication-52054.appspot.com",
  messagingSenderId: "384494489635",
  appId: "1:384494489635:web:6455814c792e0f80bea196",
  measurementId: "G-4T0VPZYXEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function EmailVerification() {
  const [email, setEmail] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [error, setError] = useState('');

  const handleSendVerification = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendEmailVerification(auth, email);
      setVerificationSent(true);
      setError('');
    } catch (error) {
      setVerificationSent(false);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <form onSubmit={handleSendVerification}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Send Verification Email</button>
      </form>
      {verificationSent && <p>Verification email sent to {email}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default EmailVerification;
