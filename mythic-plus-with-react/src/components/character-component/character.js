import React from 'react';
import './character-style.css'

const Character = ({name, faction, role, spec, race, gender, realm, score}) => {
    return (
        <div className="character-info-section">
            <a className="character-info-section-name">{`${name} \n`}</a>
          <a className="character-info-section-faction">{faction}</a>
          <a className="character-info-section-class">{role}</a>
          <a className="character-info-section-spec">{spec}</a>
          <a className="character-info-section-race">{race}</a>
          <a className="character-info-section-gender">{gender}</a>
          <a className="character-info-section-realm">{realm}</a>
          <a className="character-info-section-score">{score}</a>
        </div>
            
    )
  }
  
  export default Character;