import React from 'react';

const Label = ({ children, ...props }) => (
  <label {...props} className={`block text-sm font-medium text-gray-700 ${props.className || ''}`}>
    {children}
  </label>
);

export default Label;

