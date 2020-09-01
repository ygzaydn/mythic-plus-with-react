import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Affix from './components/affix-component/affix'
import Character from './components/character-component/character'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: [],
      queryCharName: '',
      charInfoFlag: false,
      charInfo: [],

    }
  }

  getQueryName = (event) => {
    this.setState({queryCharName: event.target.value});
  }

  getCharInfo = (event) => {
    event.preventDefault();
    axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=twisting-nether&name=${this.state.queryCharName}&fields=mythic_plus_scores`)
    .then(res => {
      this.setState({charInfo: res.data,
      charInfoFlag: !this.state.charInfoFlag});
    })
    .catch(() => {
      if(this.state.charInfoFlag){
        this.setState({charInfoFlag: !this.state.charInfoFlag});
      }
      alert('Character not found');
    })
  }

  componentDidMount(){
    axios.get('https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en')
    .then(res => {
      const affixes = res.data.affix_details;
      this.setState({ result: affixes})})

  }
  
  render(){
    const { result, charInfo, queryCharName, charInfoFlag } = this.state;
    return (
      <div className="main-page">
       <h1 className="main-title">M+ Affixes for this week!</h1>
        <div className="affix-box">
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
        <form className="char-search-box">
          <a className="char-search-box-title">Detailed character information</a>
          <div className="char-search-form-elements">
              <input  
                type="text" 
                name="name"
                className="search-bar"
                value={queryCharName}
                onChange={this.getQueryName} 
              />
            <input  
              type="submit" 
              value="Search"
              className="submit-button"
              onClick={this.getCharInfo} 
            />
          </div>
        </form>
        {charInfoFlag ? 
        <Character
          name={charInfo.name}
          faction={charInfo.faction}
          role={charInfo.class}
          spec={charInfo.active_spec_name}
          race={charInfo.race}
          gender={charInfo.gender}
          realm={charInfo.realm}
          score={charInfo.mythic_plus_scores.all}/>
        :null}
      </div>
    )
  }
}
export default App;
