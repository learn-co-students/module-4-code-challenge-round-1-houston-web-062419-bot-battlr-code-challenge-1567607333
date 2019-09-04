import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state={
      bots: [],
      displayBots: [],
      selectedBots: []
    }
  }

  componentDidMount(){
    let botUrl = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(botUrl)
    .then(r => r.json())
    .then(getBot => {
      this.setState({
        bots: getBot,
        displayBots: getBot 
      })
      // console.log(getBot)
    })
  }

  showBot = (aBot) => {
    let botArr = this.state.displayBots
    botArr.push(aBot)
  }

  render() {
    return (
      <div>
        {/* put your components here */
        <BotCollection displayBots={this.state.displayBots} showBot={this.showBot}/>
        }
        {<YourBotArmy showBot={this.showBot}/>}
      </div>
    );
  }

}

export default BotsPage;
