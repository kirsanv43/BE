import React from 'react';
import { StyledInput, Error, FieldContainer } from '../styledTegs';
import { floatNumberKeyCodes } from '../constants';


const withoutFloatSymbols = (e) => {
  if(floatNumberKeyCodes.includes(e.keyCode)) {
    e.preventDefault();
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
