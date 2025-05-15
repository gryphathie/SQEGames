import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Puzzle1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [hint, setHint] = useState('');
  const [hintResult, setHintResult] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="mt-5">
        <h1 className="text-center">Puzzle 1</h1>
        <p className="text-center">Instructions: Analyze the following form.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            minLength={20}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a password with at least 20 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h2 className="text-center mt-5">Question</h2>
      <p className="text-center">What kind of testing you did to validate the previous form?</p>
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="formBasicHint">
          <Form.Label>Hint Input</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter hint"
            value={hint || ''}
            onChange={(e) => setHint && setHint(e.target.value)}
          />
        </Form.Group>

        <Button 
          variant="secondary" 
          onClick={() => {
            if (hint.toLowerCase() === 'blackbox') {
              setHintResult('Correct! your clue for this puzzle is: "T"');
            } else {
              setHintResult('Try again');
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

export default Puzzle1;
