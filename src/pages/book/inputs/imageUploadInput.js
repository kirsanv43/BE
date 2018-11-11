import React from 'react';
import { StyledInput, FieldContainer, Image } from '../styledTegs';

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

  return (
    <FieldContainer>
      <label htmlFor={input.name}>{label}</label>
      <div>
        <StyledInput
          {...inputProps}
          {...props}
          accept="image/*"
          onChange={onChange(input.onChange)}
          onBlur={onChange(input.onBlur)}
          type={type}
        />
      </div>
      <Image src={value}/>
    </FieldContainer>
  );
};

export default ImageUploadInput;
