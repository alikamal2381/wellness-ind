import React from 'react';
import aboutImage from '../images/about.png';
//import aboutImage1 from '../images/download.png';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutImage} alt='' />
            </div>
            <div className='about-text'>
                <h2> Comes with All you Need for Daily Life </h2>
                <p>The global wellness economy is currently valued at $4.5 trillion (2018 data). ... The industry grew by 6.4 percent annually from 2015–2017, from a $3.7 trillion to a $4.2 trillion market, nearly twice as fast as global economic growth (3.6 percent annually, based on IMF data).</p>
                <button> Get the App </button>
            </div>
        </div>

    )
}

export default About;
