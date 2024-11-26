import React from 'react';


const Fun = ({ abcd, array }) => {
  const new1 = 'gfghjhyuj'; 
  return (
    <div>
      <p>I am in home</p>
      <h1>{abcd}</h1>

      <ul>
        {array.map((item, index) => (
          <li key={index}>
            <p>my name is: {item.name}</p>
            <p>my rollno is: {item.rollno}</p>
            <p>my class is: {item.class}</p>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Fun;
