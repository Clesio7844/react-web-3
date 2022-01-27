import React from 'react';
import './Possiblity.css';
import possibilityImage from '../../assets/possibility.png';

const Possibilty = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibility are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulagnce unpleasing not
          thought all exercice blessing indulagnce way everything joy altertion
          boiterious the attachement party we year to order allow asked of.
        </p>
        <h4>Requested Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibilty;
