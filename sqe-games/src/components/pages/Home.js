import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className='mt-5'>
      <h3 className='text-center mt-5'>Ohh no!</h3>
      <h3 className='text-center mt-5'>It seems like we've been locked down and the only way to Home is by getting the secret password that unlocks our exit</h3>
      <h3 className='text-center mt-5'>The person who created this maze left hints all over the puzzles in this page.</h3>
      <h3 className='text-center mt-5'>Lucky we are testers with a good logic to solve problems!</h3>
      <img src={require('../img/lock.webp')} alt="Gates" style={{maxWidth: '30%', height: 'auto'}} />
    </Container>
  );
}

export default Home;
