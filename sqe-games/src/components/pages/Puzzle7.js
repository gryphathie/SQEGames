import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Puzzle7() {
    const [answer, setAnswer] = useState('');

  return (
    <Container className="mt-5">
      <h2 className="text-center">Puzzle 6</h2>
      <p className="text-center">Instructions: Find a number with its letters in alphabetical order.</p>
      <p className='text-center'>Example: "five" has "fiv" in alphabetical order, but not "e".</p>
      <div className="d-flex justify-content-center align-items-center" style={{height: '300px'}}>
        <img src={require('../img/numbers.webp')} alt="Marbles" style={{maxWidth: '30%', height: 'auto'}} />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <input 
          type="text" 
          placeholder="Enter your answer"
          onChange={(e) => setAnswer(e.target.value)}
          value={answer} 
        />
      </div>

      {answer.toLowerCase() === 'forty' && (
        <div className="text-center mt-3 text-success">
          Correct! Your clue for this puzzle is: "5"
        </div>
      )}

        {answer === '40' && (
        <div className="text-center mt-3 text-success">
          Correct! Your clue for this puzzle is: "5"
        </div>
      )}
    </Container>
  );
}

export default Puzzle7;
