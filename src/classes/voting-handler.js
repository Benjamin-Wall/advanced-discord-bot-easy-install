class VotingHandler {

  _voteText = null;
  _options = [
    { name: "Yes", emoji: agree },
    { name: "No", emoji: disagree },
  ];
  _time = 10000;
  _channel = null;

  constructor(voteText, options, time, channel) {
    this._voteText = voteText;
    this._options = options;
    this._time = time;
    this._channel = channel;
  }

  get voteText() {
    return this._voteText;
  }

  get options() {
    return this._options;
  }

  get time() {
    return this._time;
  }

  set voteText(voteText) {
    this._voteText = voteText;
  }

  set options(options) {
    this._options = options;
  }

  set time(time) {
    this._time = time;
  }

  async performVotingProcess(color = "0x#FF0000") {
    let voteMessage = await this._channel.send(this._voteText);
    this._options.forEach(option => {
      voteMessage.react(option.emoji);
    });

    const reactions = await voteMessage.awaitReactions(
      reaction => {
        let answers = this._options.map(option => option.emoji);
        let validReactions = answers.filter(answer => answer === this._options.includes(reaction.emoji.name));
        return validReactions;
      },
      {
        time: this._time
      }
    );

    const resultMessage = this.generateResultMessage(reactions);
    resultMessage.setColor(color);
    this._channel.send({ embed: resultMessage });

    return reactions;
  }

  generateResultMessage(reactions) {
    let countsMessage = "";
    this._options.forEach(option => {
      let count = reactions.get(option.emoji).count ?? 0;
      countsMessage += `Total votes (${option.name}): ${count}\n`;
    });

    const resultMessage = new Discord.RichEmbed()
      .addField(
        "Voting Finished:",
        "----------------------------------------\n" +
        countsMessage +
        "----------------------------------------"
      );

    return resultMessage;

  }
}