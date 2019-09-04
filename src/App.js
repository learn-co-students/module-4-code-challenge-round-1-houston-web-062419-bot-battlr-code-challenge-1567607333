import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  
  constructor(){
    super()
    this.state ={
      robots: [],
      displayRobots: [],
      userRobots: []

    }
  
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => {
      this.setState({
        robots: data,
        displayRobots: data
      })
    })
  }

  addBots = (robots) => {
    let userArray = this.state.userRobots
    userArray.push(robots)
    this.setState({
      userRobots: userArray
        })

  }

  render() {
    return (
      <div className="App">
        <BotsPage robots={this.state.displayRobots} addBots ={this.addBots} userRobots = {this.state.userRobots} displayRobots ={this.state.displayRobots}/>
      </div>
    );
  }
}

export default App;
