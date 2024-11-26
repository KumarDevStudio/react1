import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto', padding: '20px' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '300px',
          height: 'auto', // Adjusted height for better responsiveness
          margin: '0 auto',
          padding: '50px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column', // Aligns elements in a column
          backgroundColor: '#f9f9f9', // Light background color
        }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Login</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px 1px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #ccc',
              borderRadius: '6px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor='password' style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px 1px' }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #ccc',
              borderRadius: '6px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ padding: '5px 0 20px 0' }}>
          <a href="/forgot-password">Forget Password?</a>
       </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type='submit'
            style={{
              padding: '8px 16px',
              background: 'blue',
              color: 'white',
              border: '2px solid #ccc',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <span>Don't have an account? <a href="/sign-up">Sign up</a></span>
        </div>
      </form>

      <div style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto', padding: '20px' }}>
        <div
          style={{
            maxWidth: '300px',
            height: 'auto',
            margin: '0 auto',
            padding: '50px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f9f9f9',
          }}>
          <h2 style={{ textAlign: 'center', color: '#333' }}>Sign Up</h2>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia tenetur aliquam ut ratione.
          </p>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => console.log('Redirecting to Sign Up page')}
              style={{
                padding: '12px',
                background: 'blue',
                color: 'white',
                fontSize: '16px',
                border: '2px solid #ccc',
                width: '50%',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Register Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
