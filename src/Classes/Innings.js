const Scoreboard = require('./Scoreboard')

class Innings {
  constructor () {
    this.scoreboard = new Scoreboard()
    this.battingTeam = {}
    this.bowlingTeam = {}
  }

  start () {
    this.scoreboard.currentBowler = this.scoreboard.bowlingTeam.getBowler()
    this.scoreboard.firstBatsman = this.scoreboard.battingTeam.getNextBatsman(0)
    this.scoreboard.secondBatsman = this.scoreboard.battingTeam.getNextBatsman(
      1
    )
  }
}

module.exports = Innings
