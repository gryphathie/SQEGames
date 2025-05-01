import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Puzzle3() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    phone: ''
  });
  const [validated, setValidated] = useState(false);
  const [hintResult, setHintResult] = useState('');
  const [hint, setHint] = useState(0);

  const countries = [
    'United States',
    'Canada', 
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Spain',
    'Italy',
    'Japan',
    'Brazil'
  ];

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCountryChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      country: countries[0]
    }));
  };

  return (
    <Container className="mt-5">
        <h2 className="text-center">Puzzle 3</h2>
        <p className="text-center">Instructions: Try to find all the bugs in this page.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="string"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            minLength={8}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 8 characters long.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your last name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Label>Country</Form.Label>
          <Form.Select
            required
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a country.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Enter phone number"
            name="phone"
            value={formData.phone}
            pattern="[0-9]{10}"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid 10-digit phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <h2 className="text-center mt-5">Question</h2>
      <p className="text-center">How many bugs are there in the page?</p>
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="formBasicHint">
          <Form.Label>Hint Input</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the number of bugs"
            value={hint || ''}
            onChange={(e) => setHint && setHint(e.target.value)}
          />
        </Form.Group>

        <Button 
          variant="secondary" 
          onClick={() => {
            if (hint == 3) {
              setHintResult('Correct! your clue for this puzzle is: "A"');
            } else {
              setHintResult('Try again, you can do better!');              
            }
          }}
        >
          Check Hint
        </Button>

        {hintResult && (
          <div className="mt-2 text-center" style={{ color: hintResult.includes('Correct') ? 'green' : 'red' }}>
            {hintResult}
          </div>
        )}
      </Form>
    </Container>
  );
}

export default Puzzle3;
