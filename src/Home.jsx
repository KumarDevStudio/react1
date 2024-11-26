import React, { useState } from 'react';


const Home = () => {
  const [array, setArray] = useState([]);
  const [person, setPerson] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const persondata = (event) => {
    event.preventDefault();
    if (isEditing) {
      const updatedArray = [...array]
      updatedArray[editIndex]=person
      setArray(updatedArray);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setArray([...array, person]);
    }
    setPerson({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleEdit = (index) => {
    setPerson(array[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredArray = array.filter((_, i) => i !== index);
    setArray(filteredArray);
  };




  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <form onSubmit={persondata}>
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
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            required
          />
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
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={person.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          {isEditing ? 'update' : 'sumbit'}
        </button>
      </form>

      {/* <h2>Submitted Data</h2>
        <ul>
          {array.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.name} <br />
              <strong>Email:</strong> {item.email} <br />
              <strong>Message:</strong> {item.message}<br />
            </li>
          ))}
        </ul> */}

      {array.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{display:'flex', justifyContent:'center'}}>Submitted Data</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f4f4f9' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Message</th>
                <th style={{ border: '1px solid #ddd', padding: '2px', textAlign: 'center' }}>Action</th>

              </tr>
            </thead>
            <tbody>
              {array.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.email}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.message}</td>

                    <button  onClick={()=> handleEdit(index)} style={{padding: '8px', display:'inline'}}>
                        edit
                    </button>

                    <button onClick={()=>handleDelete(index)} style={{padding:'8px', display:'inline'}}>
                        delete
                    </button>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )} 


    </div>
  );
};

export default Home;