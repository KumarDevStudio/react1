import React, { useState } from 'react';

const Form = () => {

  const [person, setPerson] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] =useState({});

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit =(e) =>{
    e.preventDefault();
        const newErrors = validateForm(person);
        setError(newErrors);
  

  if(Object.keys(newErrors).length === 0){
    console.log('form submit successfully')
  }else{
    console.log('form is not valid')
  }
  };

  const validateForm=(data)=>{
    const error={};

    if (!data.name.trim()) {
      error.name = 'Username is required';
  } else if (data.name.length < 3) {
      error.name = 'Name must be at least 3 characters long';
  }

  if(!data.email.trim()){
    error.email ='email is required';
  }else if(!/\S+@\S+\.\S+/.test(data.email)){
  error.email='Email is not vaild';
  }

  if(!data.password){
    error.password='password is requried';
  } else if (data.password.length < 6 || !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,16}$/.test(data.password)) {
    error.password = 'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character(@$!%?&)';
  }
  
return error
  }
  

  return (
    <div style={{ width: '50%' }}>
      <form onSubmit={handleSubmit} style={{margin:'30px'}}> 
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={person.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            
          />
          {error.name && (<p style={{color:'red'          }}>
            {error.name}
          </p>)}
        </div>


        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            
          />
          {error.email && (<p style={{
        
          color:'red'
          }}>
            {error.email}
          </p>)}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="PassWord" style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>Password</label>
            <input 
            type="password"
            id='password'
            name="password"
            value={person.password}
            onChange={handleChange}
            style={{
              width:'100%',
              padding:'8px',
              border:'1px solid #ddd',
              borderRadius:'4px',
              boxSizing:'border-box'
            }}
            
            >

            </input>
            {error.password && (
              <p style={{color:'red'}}>
                {error.password}
              </p>
            )}
        </div>

        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          Submit
        </button>
      </form>

    </div>
  );
};

export default Form;