import React, { useState } from 'react';
import { MyContext } from './MyContext'; // Import the context

const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    value: 'Initial Value',  // Initial state
  });

  const updateValue = (newValue) => {
    setState((prev) => ({ ...prev, value: newValue }));  // Update state
  };

  return (
    <MyContext.Provider value={{ state, updateValue }}>  // Pass state and updater
      {children}  // Provide context to children components
    </MyContext.Provider>
  );
};

export default MyProvider;