import React, { useState, useCallback } from 'react';

function Ranjith() {
  // State to track whether the theme is light (true) or dark (false)
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Memoize the toggleTheme function
  const toggleTheme = useCallback(() => {
    setIsLightTheme((isLightTheme) => !isLightTheme);
  }, []);

  // Choose theme based on isLightTheme
  const theme = isLightTheme
    ? { background: '#ffffff', color: '#000000' } // Light theme
    : { background: '#333333', color: '#ffffff' }; // Dark theme

  return (
    <div style={{ background: theme.background, color: theme.color, height: '100vh', padding: '20px' }}>
      <h1>Simple Theme Changer</h1>
      <p>The current theme is {isLightTheme ? 'Light' : 'Dark'}</p>
      <button onClick={toggleTheme} style={{ padding: '10px', fontSize: '16px' }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Ranjith;
