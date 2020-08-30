import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: [],
    }
  }
  componentDidMount(){
    axios.get('https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en')
    .then(res => {
      const affixes = res.data.affix_details;
      this.setState({ result: affixes})})
  }
  
  render(){
    const { result } = this.state;
    console.log(result);
    return (
      <div>
       <h1>M+ Affixes for this week!</h1>,
      {result.map(el => {
        return (
          <Affix 
            name={el.name}
            description={el.description}
            url={el.wowhead_url}
            id={el.id}
          />
        )
        
      })}
      </div>

    )
  }
}

const Affix = ({name, description, url, id}) => {
  return (
    <div key={id}>
      <h2>Name of the affix:{name}</h2>
      <h2>Description of the affix:{description}</h2>
      <h2>Wowhead URL:{url}</h2>
    </div>
  )
}


export default App;
