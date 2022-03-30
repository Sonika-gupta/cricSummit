const Innings = require('./Innings')
const Scoreboard = require('./Scoreboard')

class SecondInnings extends Innings {
  constructor () {
    super()
  }

  start ({ target, battingTeam, bowlingTeam }) {
    this.target = target
    this.battingTeam = battingTeam
    this.bowlingTeam = bowlingTeam
    super.start()
    console.log(this)
  }
}

module.exports = SecondInnings
