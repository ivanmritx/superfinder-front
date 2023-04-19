import React from 'react';
import Popup from 'reactjs-popup';
import './About.css';
import info from '../images/info.png'
import github from '../images/github.png'


const About = () => {
    return (
        <Popup
        trigger={
            <div className="info-ico"><img height="100px" width="100px"  src={info} alt="Info"></img></div>
        }
        modal
        nested
      >
        {close => (
          <div className="modal-about">
            <button className="close-about" onClick={close}>
              &times;
            </button>
            <div className="header-about"> INFO </div>
            <div className="content-about">
              {' '}
              <p>Esta aplicación web ha sido creada sin ánimo de lucro.</p> 
              <p>Su código fuente se encuentra publicado en github:</p>
              <div><a href="https://github.com/ivanmritx" target="_blank" rel="noopener noreferrer"><img className="github-ico" height="360px" width="360px"  src={github} alt="github"></img></a></div>
              <p>v 0.0.2</p> 
            </div>
          </div>
        )}
      </Popup>
    );
}

export default About;