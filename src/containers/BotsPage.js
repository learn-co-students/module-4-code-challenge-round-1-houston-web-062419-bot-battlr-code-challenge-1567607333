import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"


class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super(),
    this.state={
      bots: [],
      botsMaster:[],
      enlist:[],
      toggle: false,
      bot: {}
    }
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res=>res.json())
    .then(bots =>{
      let arr = bots.map(bot => {return{...bot, enlisted: false}})
      this.setState({
        bots: arr,
        botsMaster: arr
      })
    })
  }

  enlist = (e) => {
    let arr = ""
    this.state.bots.map(bot => {
      if (e.id == bot.id){
        if (bot.enlisted == false){
          bot.enlisted = true
          arr = bot
          return arr
        } 
      }
    })
    if (arr != "") {
      this.setState({
        enlist: [...this.state.enlist, arr]
      })
    }
  }

  delist = (e) => {
    console.log(e)
    let arr = ""
    this.state.bots.map(bot => {
      if (e.id == bot.id){
        if (bot.enlisted == true){
          bot.enlisted = false
          arr = bot
          return arr
        } 
      }
    })
    console.log(arr)
    var a = this.state.enlist
    console.log(a)
    a.splice(a.findIndex(e => e.id === arr.id),1)
    console.log(a)
    // if (arr != "") {
      this.setState({
        enlist: a
      })
    // }
  }

  replaceCollection = (e) => {
    console.log(e)
    if (this.state.toggle == false){
      this.setState({
        toggle: !this.state.toggle,
        bot: e
      })
    }
  }

  goBack = (e) => {
    console.log(e)
    this.setState({
      toggle: !this.state.toggle
    })
  }


  render() {
    return (
      <div>
         <YourBotArmy enlist={this.state.enlist} delist={this.delist}/>
         {(this.state.toggle == false) ?<BotCollection bots={this.state.bots} enlist={this.enlist} replaceCollection={this.replaceCollection}/> : <BotSpecs bot={this.state.bot} enlist={this.enlist} goBack={this.goBack}/>}
      </div>
    );
  }

}

export default BotsPage;
