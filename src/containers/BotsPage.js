import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
  	super()

  	this.state = {
  		sorted: false,
  		bots: [],
  		showbots: []
  	}
  }

  componentDidMount(){
  	this.fetchList()
  }

  fetchList(){
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
  	//console.log(arr)
  	this.setState({showbots:arr, bots:arr})
  }

  handleClick = (bot) =>{
	let arr = this.state.showbots.map(b => {if (b.id === bot.id) {b.spec = !b.spec;} return b})
  	//console.log(arr)
  	this.setState({showbots:arr, bots:arr})
  }

  sortCollection = () =>{
  	console.log(this.state.bots)
  	if (this.state.sorted){
  		console.log(this.state.bots)
  		this.setState({showbots:this.state.showbots.sort((a, b) => (a.id > b.id)? 1: -1)})
  	}else{
  		this.setState({showbots: this.state.showbots.sort((a, b) => (a.name > b.name)? 1: -1)})
  	}
  	this.setState({sorted: !this.state.sorted})
  }

  render() {
    return (
      <div>

         <YourBotArmy bots = {this.state.showbots.filter(b => b.in_army === true)} handleClick = {this.handleEnlist}/>

        <BotCollection bots = {this.state.showbots.filter(b => b.in_army === false)} handleClick = {this.handleClick} 
        handleGoBack = {this.handleClick} handleEnlist={this.handleEnlist} sortCollection = {this.sortCollection} 
        sorted = {this.state.sorted}/>

      </div>
    );
  }

}

export default BotsPage;
