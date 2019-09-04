import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
        <button className="ui button fluid"  onClick={() => this.props.sortCollection()}>
                  {this.props.sorted?"Sorted!":"Sort by Name"}
        </button>
    		<div className="row">
    		  {this.props.bots.map(bot => bot.spec? <BotSpecs bot = {bot} handleGoBack = {this.props.handleGoBack} 
                                                                        handleEnlist={this.props.handleEnlist}/>:
            <BotCard bot = {bot} handleClick = {this.props.handleClick}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
