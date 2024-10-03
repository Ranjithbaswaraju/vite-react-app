import React, { useState } from 'react';

const EvenOddBackground = () => {
  const [number, setNumber] = useState('');

  // Function to handle input change
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  // Determine background color based on whether the number is even or odd
  const backgroundColor = number && number % 2 === 0 ? 'black' : 'white';

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input 
        type="number" 
        value={number} 
        onChange={handleChange} 
        placeholder="Enter a number" 
        style={{ padding: '10px', fontSize: '18px' }} 
      />
    </div>
  );
};

export default EvenOddBackground;
