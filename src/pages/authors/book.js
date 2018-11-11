import React, { Component } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';

const BookForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const BookFormLayout = styled.div``;
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: ${props => props.width ? `${props.width}px` : '100%'};
`;
const CustomInput = props => <StyledInput {...props}/>

class Book extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    // this.props.fetchCurrency({ id, currency });
  }

  componentWillUnmount() {
    this.props.resetCurrencyData();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <BookFormLayout>
        <BookForm onSubmit={handleSubmit}>
          <FieldContainer>
            <label htmlFor="firstName">First Name</label>
            <Field width="200" name="firstName" component={CustomInput} type="text" />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </FieldContainer>
        </BookForm>
      </BookFormLayout>
    );
  }
}

export default reduxForm({ form: 'book' })(Book)