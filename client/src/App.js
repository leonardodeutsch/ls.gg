import React from "react";
import axios from 'axios';
import API_KEY from '../../config.js';

import Search from './components/Search.jsx';
import SummonerInfo from './components/SummonerInfo.jsx';
import Stats from './components/Stats.jsx';
import MatchHistory from './components/MatchHistory.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      puuid: '',
      accountId: '',
      id: '',
      name: '',
      profileIconId: '',
      summonerLevel: ''
    };

    this.getSummoner = this.getSummoner.bind(this);
  }
  
  getSummoner(summonerName) {
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Cassiel?api_key=${API_KEY}`)
    .then(response => {
      let data = response.data;
      this.setState({
        puuid: data.puuid,
        accountId: data.accountId,
        id: data.id,
        name: data.name,
        profileIconId: data.profileIconId,
        summonerLevel: data.summonerLevel
      });
    })
    .catch(err => {
      throw err;
    })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.getSummoner}>Hello</h1>
        <div>{this.state.name}</div>
        <Search />
      </div>
    );
  }
}

export default App;
