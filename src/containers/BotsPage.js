import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
class BotsPage extends React.Component {


  constructor(){
    super()

    this.state={
      myBots: [],
      bots: []
    }
  }
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        myBots: data,
        bots: data
      })
    })
  }
  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} />
        <YourBotArmy myBots={this.state.myBots}/>
      </div>
    );
  }

}

export default BotsPage;
