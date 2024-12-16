import React from 'react';

const Input = (props) => (
  <input 
    {...props} 
    className={`w-full px-3 py-2 border border-gray-300 rounded-md ${props.className || ''}`}
  />
);

export default Input;

