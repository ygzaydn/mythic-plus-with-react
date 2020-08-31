import React from 'react';
import './affix-style.css'

const Affix = ({name, description, url, id}) => {
    return (
      <div className="affix-card" key={id}>
        <a className="affix-card-name">{name}</a>
        <a className="affix-card-description">{description}</a>
        <a className="affix-card-url" href={url}>{`${url} \n`}</a>
      </div>
    )
  }
  
  export default Affix;