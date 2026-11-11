import React, { useState } from 'react';
import './App.css';

function App() {
  // State for the counter value
  const [count, setCount] = useState(0);

  // State for the theme ('light' or 'dark')
  const [theme, setTheme] = useState('light');

  // Increment handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement handler
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Reset handler
  const handleReset = () => {
    setCount(0);
  };

  // Toggle Theme handler
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      {/* Header with Theme Toggle */}
      <header className="app-header">
        <span className="theme-indicator">Current Theme: <strong>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</strong></span>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>

      {/* Main Counter Card */}
      <main className="counter-card">
        <h1>Interactive Counter</h1>
        
        {/* Dynamic Counter Display */}
        <div className="counter-display">
          <span className="count-value">{count}</span>
        </div>

        {/* Counter Action Buttons */}
        <div className="button-group">
          <button className="btn increment" onClick={handleIncrement}>
            Increment (+1)
          </button>
          <button className="btn decrement" onClick={handleDecrement}>
            Decrement (-1)
          </button>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;