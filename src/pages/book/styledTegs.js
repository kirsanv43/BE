import styled from 'styled-components';

export const StyledInput = styled.input`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  border: solid 1px;
  border-color: ${props =>(props.error ? '#ff5050' : 'black')};
`;

const margin = '10px'
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${margin};
`;

export const FieldsContainer = styled.div`
  display: flex;
`;
export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Error = styled.span`
  font-size: 12px;
  margin-left: 10px;
  color: #ff5050;
`;


export const Image = styled.img`
    width: 300px;
    height: auto;
`;

export const BookForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin-right: ${margin};
`;

export const DeleteAuthorButton = styled.button`
  margin-top: ${margin};
  width: 164px;
`;

export const ButtonContainer = styled.div`
  margin-left: ${margin};
  margin-top: 20px;
`;

export const Author = styled.li`
  margin-left: 20px;
`;