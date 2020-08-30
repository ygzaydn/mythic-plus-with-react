import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Affix from './components/affix'

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
      <div class="main-page">
       <h1 class="main-title">M+ Affixes for this week!</h1>
        <div class="affix-box">
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
      </div>

    )
  }
}

export default App;
