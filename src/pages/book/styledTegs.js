import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  border: solid 1px;
  border-color: ${props =>(props.error ? '#ff5050' : 'black')};
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Error = styled.span`
  font-size: 12px;
  margin-left: 10px;
  color: #ff5050;
`;


export const Image = styled.img`
    width: 600px;
    height: auto;
`;
