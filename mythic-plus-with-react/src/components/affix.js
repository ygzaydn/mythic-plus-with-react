import React from 'react';
import './affix-style.css'

const Affix = ({name, description, url, id}) => {
    return (
      <div class="affix-card" key={id}>
        <a class="affix-card-name">{name}</a>
        <a class="affix-card-description">{description}</a>
        <a class="affix-card-url" href={url}>{`${url} \n`}</a>
      </div>
    )
  }
  
  export default Affix;