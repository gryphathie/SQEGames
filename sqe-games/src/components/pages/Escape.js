import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Confetti from 'react-dom-confetti';

function Escape() {
    const [answer, setAnswer] = useState('');
    const [isExploding, setIsExploding] = useState(true);

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };

    const handleExplode = (event) =>{
        if (event.toLowerCase() === "t3st3r5"){
            setIsExploding(true);
            
        }
        else{
            setIsExploding(false);
        }
    }

  return (
    <Container className="mt-5">
      <h2 className="text-center">Escape Room</h2>
      <p className="text-center">Quick! Input the secret code to open up the gates!</p>
      <div className="d-flex justify-content-center align-items-center" style={{height: '300px'}}>
        <img src={answer.toLowerCase() === 't3st3r5' ? require('../img/gates.gif') : require('../img/gates_closed.gif')} alt="Gates" style={{maxWidth: '30%', height: 'auto'}} />        
      </div>
      {answer.toLowerCase() === 't3st3r5' && (
        <div className="text-center mt-3 text-success">
            <h2>Puff you managed to escape!!</h2>
        </div>
      )}
      <div className="d-flex justify-content-center align-items-center mt-5">
        <input 
          type="text" 
          placeholder="Enter your answer"
          onChange={(e) => {
            setAnswer(e.target.value)
            handleExplode(e.target.value)}}
          value={answer} 
        />
      </div>
    </Container>
  );
}

export default Escape;
