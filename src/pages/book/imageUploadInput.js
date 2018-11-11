import React from 'react';
import styled from 'styled-components';
import { StyledInput, Error, FieldContainer, Image } from './styledTegs';

const onChange = cb => e => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = (e) => {
        cb(e.target.result)
    };
  } else {
    cb(file)
  }
  
};

const ImageUploadInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...props
}) => {
  const { value, ...inputProps } = input;
  console.log(value);
  
  return (
    <FieldContainer>
      <label htmlFor={input.name}>{label}</label>
      <Image src={value}/>
      <div>
        <StyledInput
          {...inputProps}
          {...props}
          accept="image/*"
          onChange={onChange(input.onChange)}
          onBlur={onChange(input.onBlur)}
          type={type}
          error={touched && error}
        />
        {touched && error && <Error>{error}</Error>}
      </div>
    </FieldContainer>
  );
};

export default ImageUploadInput;
