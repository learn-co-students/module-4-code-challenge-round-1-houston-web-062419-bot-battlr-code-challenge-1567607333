import React from "react";

const BotCard = props => {
  const { bot } = props;

  let botType;

  switch (bot.allBot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.allBot.id}
        onClick={() => props.showBot}
      >
        <div className="image">
          <img alt="oh no!" src={bot.allBot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.allBot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.allBot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.allBot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.allBot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.allBot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
