import React from 'react'

const SignUp = () => {
  return (
  
    <div style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto', padding: '20px', display:'blockInline' }}>
    <div 
    style={{
      maxWidth: '300px',
      Height: '500vh',
      margin: '0 auto',
      padding: '50px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '',
      // display:'inline-block',
      // display:'flex'
    }}>

<h2 style={{ textAlign: 'center', color: '#333' }}>Sign Up</h2>

<div style={{ marginBottom: '15px' }}>
          <label htmlFor="text" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px 1px' }}>
            Full Name
          </label>
          <input
            type="Name"
            id="Name"
            name="Name"
            value={''}
            onChange={''}
            placeholder="Enter your Full Name"
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
          <label htmlFor="Number" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px 1px' }}>
            Mobile No.
          </label>
          <input
            type="mobile"
            id="mobile"
            name="mobile"
            value={''}
            onChange={''}
            placeholder="Enter your Full Name"
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
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px 1px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={''}
            onChange={''}
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
          <label htmlFor='Password' style={{ display: 'block', fontWeight: 'bold', margin: '10px 0 5px 1px ' }}>
            Password
          </label>
          <input type="Password"
            name="password"
            id="Password"
            value={''}
            onChange={''}
            placeholder='Enter your Password'
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #ccc',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
      
        <div style={{ textAlign: 'center' }}>
          <button type='submit'
            style={{
              padding: '5px 0 15px 0',
              background: 'blue',
              color: 'white',
              padding: '8px 16px 8px 16px',
              border: '2px solid #ccc',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Sign Up
          </button>
        </div>



    </div>
</div>
  )
}

export default SignUp;
