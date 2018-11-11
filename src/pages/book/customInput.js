import React from 'react';
import { StyledInput, Error, FieldContainer } from './styledTegs';

const floatNumberKeyCodes = [
  69,  // e
  189, // -
  187, // +
  188, // .
  190, // ,
]
const withoutFloatSymbols = (e) => {
  if(floatNumberKeyCodes.includes(e.keyCode)) {
    e.preventDefault();
    e.stopPropagation();
  }
}

const CustomInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...props
}) => {
  const additionalProps = {}
  if(type === 'number') {
    additionalProps.onKeyDown = withoutFloatSymbols
  }
  return (
    <FieldContainer>
      <label htmlFor={input.name}>{label}</label>
      <div>
        <StyledInput
          {...input}
          {...props}
          {...additionalProps}
          type={type}
          error={touched && error}
        />
        {touched && error && <Error>{error}</Error>}
      </div>
    </FieldContainer>
  );
};

export default CustomInput;
