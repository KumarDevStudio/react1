import React, { useState } from 'react';

const Fun1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [bgColor, setBgColor] = useState('#f9f9f9');

   const [padding, setPadding] = useState({padding: "8px"});



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };


const changePadding = () =>{
  setPadding({padding:"16px"});
};


const resetPadding = () =>{
  setPadding({padding:"8px"});
};


    
    const BackgroundColor = () => {
        const newColor = bgColor === '#f9f9f9' ? 'red' : '#f9f9f9';
        setBgColor(newColor);
      };
      const BackgroundColor1 = () => {
        const newColor = bgColor === '#f9f9f9' ? 'blue' : '#f9f9f9';
        setBgColor(newColor);
      };
    
      const BackgroundColor2 = () => {
        const newColor = bgColor === '#f9f9f9' ? 'green' : '#f9f9f9';
        setBgColor(newColor);
      };
    
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Contact Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: bgColor, 
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="name"
            style={{ display: 'block', fontWeight: 'bold' }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="email"
            style={{ display: 'block', fontWeight: 'bold' }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="message"
            style={{ display: 'block', fontWeight: 'bold' }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Enter your message"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          ></textarea>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>


        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={BackgroundColor}
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '5px 10px',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
        >
          red
        </button>

        <button
          onClick={BackgroundColor1}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '2px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
        >
          blue
        </button>

        <button
          onClick={BackgroundColor2}
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '2px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
        >
          green
        </button>



      


      </div>
      </form>

        <button
          onClick={changePadding}
          style={{ 
            backgroundColor: 'green',
            color: 'white',
            padding: '8px',
            borderRadius: '2px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
        >
          green
        </button>

    </div>
  );
};

export default Fun1;

// const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const persondata = (event) => {
//     event.preventDefault();
//     if (isEditing) {
//       const updatedArray = array.map((item, index) =>
//         index === editIndex ? person : item
//       );
//       setArray(updatedArray);
//       setIsEditing(false);
//       setEditIndex(null);
//     } else {
//       setArray([...array, person]);
//     }
//     setPerson({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setPerson({ ...person, [e.target.name]: e.target.value });
//   };

//   const handleEdit = (index) => {
//     setPerson(array[index]);
//     setIsEditing(true);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const filteredArray = array.filter((_, i) => i !== index);
//     setArray(filteredArray);
//   };