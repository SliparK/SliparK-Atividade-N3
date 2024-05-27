import React from 'react';

interface InputCustomProps {
  defaultValue?: string;
  type: 'text' | 'email' | 'number';
  placeholder: string;
}

const InputCustom: React.FC<InputCustomProps> = ({
  defaultValue,
  type,
  placeholder,
}) => {
  return (
    <input
      style={{color: 'red'}} 
      type={type} 
      defaultValue={defaultValue} 
      placeholder={placeholder} 
    />
  );
};

export default InputCustom;