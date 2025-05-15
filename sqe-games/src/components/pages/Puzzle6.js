import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Puzzle6() {
    const [answer, setAnswer] = useState('');

  return (
    <Container className="mt-5">
      <h2 className="text-center">Puzzle 6</h2>
      <p className="text-center">Instructions: You have three bags, each containing two marbles. Bag A contains two white marbles, Bag B contains two black marbles, and Bag C contains one white marble and one black marble.</p>
      <p className='text-center'>You pick a random bag and take out one marble.</p>
      <p className='text-center'>It is a white marble.</p>
      <p className='text-center'>What is the probability that the remaining marble from the same bag is also white?</p>
      <div className="d-flex justify-content-center align-items-center" style={{height: '300px'}}>
        <img src={require('../img/marbles-bags.png')} alt="Marbles" style={{maxWidth: '100%', height: 'auto'}} />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <label className='me-3'>Enter your answer as a fraction (i.e. 1/4)</label>
        <input 
          type="text" 
          placeholder="Enter your answer"
          onChange={(e) => setAnswer(e.target.value)}
          value={answer} 
        />
      </div>

      {answer === '2/3' && (
        <div className="text-center mt-3 text-success">
          Correct! Your clue for this puzzle is: "R"
        </div>
      )}
    </Container>
  );
}

export default Puzzle6;
