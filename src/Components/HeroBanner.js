import React from 'react';
import '../Components/Style.css';

const HeroBanner = () => {
  return (
    <div className='HeroBanner'>
      <p className='Text'>
        <span>Wlcome to [Your Company Name],Where dedicated professionals works</span>
        <span> together to bring innovation, creativity, and expertise to the software industry,get to know</span>
        <span> the individuals who make our company thrive.</span>
      </p>
       <hr className='line'/>
      <h1 className='Meet'>Meet Our Team</h1>
    </div>
  );
}

export default HeroBanner;
