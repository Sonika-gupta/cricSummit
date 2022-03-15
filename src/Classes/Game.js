class Game {
  constructor ({ overs = 20, bowlCards, teamA, teamB, scoreboard }) {
    this.overs = overs
    this.bowlCards = bowlCards
    this.teamA = teamA
    this.teamB = teamB
    this.target = 0
    this.scoreboard = scoreboard
  }

  startGame () {
    this.toss()
    this.scoreboard.assignBowler()
    this.scoreboard.assignFirstBatsman()
    this.scoreboard.assignSecondBatsman()
  }

  toss () {
    const heads = Math.floor(Math.random() * 2)
    // ASSUMING TEAM A CALLS HEAD AND WHICHEVER TEAM WINS ASKS TO BAT FIRST
    this.scoreboard.battingTeam = heads ? this.teamA : this.teamB
    this.scoreboard.bowlingTeam = heads ? this.teamB : this.teamA
  }
}

module.exports = Game
