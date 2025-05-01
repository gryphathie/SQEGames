import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Puzzle4() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Puzzle 4</h2>
      <p className="text-center">Instructions: Fill in the blanks with the correct answers and find the hidden clue.</p>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>The ______ testing is a software technique that allows us to verify that the software is working as expected.</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter your answer"
                answer="John"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group className="mb-3" controlId="formFirstNameResult">
              <Form.Label>Hint 1</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={formData.firstName.toLowerCase() === 'automated' ? 'Correct! Your clue for this puzzle is: "T"' : ''}
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>The ______ testing is used when the tester has a complete knowledge of the application.</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter your answer"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group className="mb-3" controlId="formLastNameResult">
              <Form.Label>Hint 2</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={formData.lastName.toLowerCase().replace(' ', '')  === 'whitebox' || formData.lastName.toLowerCase().replace(' ', '') === 'white-box' ? 'Correct! Your clue for this puzzle is: "M"' : ''}
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label> ______ testing with testing individual components after they are combined</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter your answer"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group className="mb-3" controlId="formEmailResult">
              <Form.Label>Hint 3</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={formData.email.toLowerCase() === 'integration' ? 'Correct! Your clue for this puzzle is: "B"' : ''}
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>_____ testing checks the app behavior under a great amount of workload</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter your answer"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group className="mb-3" controlId="formPhoneResult">
              <Form.Label>Hint 4</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={formData.phone.toLowerCase() === 'load' ? 'Correct! Your clue for this puzzle is: "S"' : ''}
              />
            </Form.Group>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default Puzzle4;
