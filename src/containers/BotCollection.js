import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {this.props.displayBots.map(allBot => {return <BotCard allBot={allBot}/>})}
			  {this.props.showBot}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
