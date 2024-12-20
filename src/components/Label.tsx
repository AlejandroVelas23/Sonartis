import React, { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text, ...props }) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" {...props}>
      {text}
    </label>
  );
};

export default Label;

