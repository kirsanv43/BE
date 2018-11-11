import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {
  BookForm,
  ButtonContainer,
  Button,
  FieldsContainer,
  FirstColumn,
  SecondColumn
} from './styledTegs';
import validate from './validation';
import { FORM_NAME } from './constants';
import { Header } from '../../components';
import {
  Title,
  Authors,
  YearOfPublication,
  PublisherName,
  NumberOfPages,
  ISBN,
  ReleaseDate,
  PhotoOfBook
} from './fields';
import { FIELDS_NAMES } from '../../constants';

class Book extends Component {
  onSubmit = data => {
    const dataToSave = {...data}
    if (dataToSave[FIELDS_NAMES.YEAR]) {
      dataToSave[FIELDS_NAMES.YEAR] = Number.parseInt(dataToSave[FIELDS_NAMES.YEAR])
    }
    if (this.props.isItEditMode) {
      this.props.updateBook(dataToSave);
    } else {
      this.props.createBook(dataToSave);
    }
    this.props.history.push(`/`);
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { handleSubmit, isItEditMode } = this.props;
    return (
      <div>
        <Header>{isItEditMode ? 'Edit' : 'Create'} book</Header>
        <BookForm noValidate onSubmit={handleSubmit(this.onSubmit)}>
          <FieldsContainer>
            <FirstColumn>
              <Title />
              <Authors />
              <NumberOfPages />
              <PublisherName />
              <YearOfPublication />
              <ReleaseDate />
              <ISBN />
            </FirstColumn>
            <SecondColumn>
              <PhotoOfBook />
            </SecondColumn>
          </FieldsContainer>
          <ButtonContainer>
            <Button type="button" onClick={this.goBack}>
              Go back
            </Button>
            <Button type="submit">Save</Button>
          </ButtonContainer>
        </BookForm>
      </div>
    );
  }
}

export default reduxForm({ form: FORM_NAME, validate })(Book);
