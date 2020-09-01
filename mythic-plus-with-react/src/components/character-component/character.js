import React from 'react';
import './character-style.css'

const Character = ({name, faction, role, spec, race, gender, realm, score}) => {
    return (
        <div className="character-info-section">
          <a className="character-info-section-name">{`Character Name: ${name}`}</a>
          <a className="character-info-section-faction">{`Faction: ${faction}`}</a>
          <a className="character-info-section-class">{`Role: ${role}`}</a>
          <a className="character-info-section-spec">{`Active Spec: ${spec}`}</a>
          <a className="character-info-section-race">{`Race: ${race}`}</a>
          <a className="character-info-section-gender">{`Gender: ${gender}`}</a>
          <a className="character-info-section-realm">{`Realm: ${realm}`}</a>
          <a className="character-info-section-score">{`M+ score: ${score}`}</a>
        </div>
            
    )
  }
  
  export default Character;