const FirstInnings = require('./FirstInnings')
const SecondInnings = require('./SecondInnings')

class Game {
  constructor ({ overs = 20, bowlCards, teamA, teamB }) {
    this.overs = overs
    this.bowlCards = bowlCards
    this.teamA = teamA
    this.teamB = teamB
    this.firstInnings = new FirstInnings()
    this.secondInnings = new SecondInnings()
  }

  setupSecondInnings () {
    this.secondInnings.start({
      target: this.firstInnings.scoreboard.score + 1,
      battingTeam: this.firstInnings.bowlingTeam,
      bowlingTeam: this.firstInnings.battingTeam
    })
  }
}

module.exports = Game
