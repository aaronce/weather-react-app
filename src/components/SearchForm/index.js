import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup';

const SearchForm = props => {
  const setLocation = props.locSetter;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const location = form.elements.location.value
    event.preventDefault();
    event.stopPropagation();

    if (location) {
      setLocation(location);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control name="location" size="lg" type="text" placeholder="Enter location" />
      </FormGroup>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  )
}

export default SearchForm
