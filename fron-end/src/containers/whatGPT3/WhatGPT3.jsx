import React from 'react';
import './WhatGPT3.css';
import { Feature } from '../../component';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whatp3'>
      <div className='gpt3__whatgpt3-featured'>
        <Feature title='What is GPT-3' text='We so opinion friends as delight. Whole front do of plate ne detective nor convinced residence owen. Connection has put impossiblity boisterrou. At jointure ladyship an insisted so humanity he'/>
      </div>
      <div className='gpt3__whatgp3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='We so oponion friends me message as delight. Whole front do of plate heard on ought'/>
        <Feature title='Knowldgebase' text='At jointure ladyship an insisted so humanity he Friendly bachelor entrence to on by. As put impossible own apartmet to'/>
        <Feature title='Education' text='At jointure ladyship an insisted so humanity he Friendly bachelor entrence to on by. As put impossible own apartmet to'/>
      </div>
    </div>
  );
};

export default WhatGPT3;
