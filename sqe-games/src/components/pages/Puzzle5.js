import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Puzzle5() {
    const [answer, setAnswer] = useState('');

  return (
    <Container className="mt-5">
      <h2 className="text-center">Puzzle 5</h2>
      <p className="text-center">Instructions: If the time is 3:15 when you look at a clock, what's the angle between the hour hand and the minute hand?</p>
      <div className="d-flex justify-content-center align-items-center" style={{height: '300px'}}>
        <img src={require('../img/clock.webp')} alt="Clock" style={{maxWidth: '100%', height: 'auto'}} />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <input 
          type="text" 
          placeholder="Enter your answer"
          onChange={(e) => setAnswer(e.target.value)}
          value={answer} 
        />
      </div>

      {answer === '82.5' && (
        <div className="text-center mt-3 text-success">
          Correct! Your clue for this puzzle is: "3"
        </div>
      )}
    </Container>
  );
}

export default Puzzle5;
