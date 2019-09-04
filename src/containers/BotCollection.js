import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	addToArmy = (bot) => {
		let arr= this.props.myBots
		arr.push(bot)
		console.log(bot) 
		this.setState({
			myBots: arr
		})
	}

	render(){
		return (
		<div className="ui four column grid">
				<div className="row">
					{this.props.bots.map(bot => <BotCard bot={bot} addToArmy={this.addToArmy} key={bot.id}/>)}
				
				</div>
		</div>
		);
  	}

};

export default BotCollection;
