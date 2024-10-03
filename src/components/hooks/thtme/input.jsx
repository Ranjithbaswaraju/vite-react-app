import React, { useState } from 'react';

const EvenOddChecker = () => {
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={handleChange} 
        placeholder="Enter a number" 
      />
      <input 
        type="text" 
        value={number && number % 2 === 0 ? 'Even' : 'Odd'} 
        readOnly 
      />
    </div>
  );
};

export default EvenOddChecker;
