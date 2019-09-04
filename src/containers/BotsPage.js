import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    botArmy: [],
    showBotSpecs: false,
    selectedBot: null
  }
  
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({
        ...this.state,
        allBots: bots
      }))
  }

  toggleBot = bot => {
    const userArmy = this.state.botArmy.slice()

    if (this.state.botArmy.includes(bot)) {
      userArmy.splice(userArmy.indexOf(bot), 1)
      this.setState({
        ...this.state,
        botArmy: userArmy
      })
    } else {
      this.setState({
        ...this.state,
        showBotSpecs: true,
        selectedBot: bot
      })
    }
  }

  handleDetailClick = action => {
    if (action === 'back') {
      this.setState({
        ...this.state,
        showBotSpecs: false,
        selectedBot: null
      })
    } else if (action === 'enlist') {
      const userArmy = this.state.botArmy.slice()
      userArmy.push(this.state.selectedBot)

      this.setState({
        ...this.state,
        botArmy: userArmy,
        showBotSpecs: false,
        selectedBot: null
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} toggleBot={this.toggleBot}/>
        {this.state.showBotSpecs ? <BotSpecs bot={this.state.selectedBot} handleClick={this.handleDetailClick}/> : <BotCollection allBots={this.state.allBots} toggleBot={this.toggleBot}/>}
      </div>
    );
  }

}

export default BotsPage;