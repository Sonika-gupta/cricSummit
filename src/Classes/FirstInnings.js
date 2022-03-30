const Innings = require('./Innings')
const Scoreboard = require('./Scoreboard')

class FirstInnings extends Innings {
  constructor () {
    super()
  }

  start () {
    this.toss()
    super.start()
  }

  toss () {
    const heads = Math.floor(Math.random() * 2)
    // ASSUMING TEAM A CALLS HEAD AND WHICHEVER TEAM WINS ASKS TO BAT FIRST
    this.battingTeam = heads ? this.teamA : this.teamB
    this.bowlingTeam = heads ? this.teamB : this.teamA
  }
}

module.exports = FirstInnings
