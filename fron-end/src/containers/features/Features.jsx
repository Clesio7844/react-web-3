import React from 'react';
import { Feature } from '../../component';
import './Features.css';

const featuresData = [
  {
    title: 'Improving end distruest instantly',
    text:
      'From they fine john he given of rich he. They are draw mrs like. Improving and distrust may instantly was household appladded'
  },
  {
    title: 'Become the tended active',
    text:
      'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to'
  },
  {
    title: 'Message or am nothing',
    text:
      'Led ask possible mistress relation elegance eat likewise debating. By message or am nothingst chiefly address'
  },
  {
    title: 'Really boy law country',
    text:
      'Really boy law country she unable her sister. Feet you off its like six. Among sex are leave law built now. in built table in an rapid blush'
  }
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realise It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
