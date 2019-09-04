import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
  	super()
  	this.state = {
  		bots: [],
  		showbots: []
  	}
  }

  componentDidMount(){
  	fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  	.then(res => res.json())
  	.then(res => {
  		res.map(r => r.in_army = false)
  		res.map(r => r.spec = false)
  		this.setState({bots: res, showbots: res})
  	})
  }

  handleEnlist = (bot) => {
  	console.log(bot)
  	let arr = this.state.showbots.map(b => {if (b.id === bot.id) {b.in_army = !b.in_army; b.spec=false;} return b})
  	console.log(arr)
  	this.setState({showbots:arr, bots:arr})
  }

  handleClick = (bot) =>{
	let arr = this.state.showbots.map(b => {if (b.id === bot.id) {b.spec = !b.spec;} return b})
  	console.log(arr)
  	this.setState({showbots:arr, bots:arr})
  }

  render() {
    return (
      <div>

         <YourBotArmy bots = {this.state.showbots.filter(b => b.in_army === true)} handleClick = {this.handleEnlist}/>

        <BotCollection bots = {this.state.showbots.filter(b => b.in_army === false)} handleClick = {this.handleClick} 
        handleGoBack = {this.handleClick} handleEnlist={this.handleEnlist}/>

      </div>
    );
  }

}

export default BotsPage;
