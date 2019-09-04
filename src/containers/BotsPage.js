import React from "react";
import BotCard from "../components/BotCard"
import YourBotArmy from "../containers/YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  addUserBots = (bot) => {
    let userArray = this.state.userRobots
    userArray.push(bot)
    this.setState({
      userRobots: userArray
        })
    

  }

  render() {
    return (
      <div>
        <YourBotArmy addBots = {this.props.addBots} userRobots = {this.props.userRobots}/>
        {this.props.robots.map(bot => <BotCard bot= {bot} addBots = {this.props.addBots} />)}
      </div>
    );
  }

}

export default BotsPage;
