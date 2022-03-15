class Scoreboard {
  constructor () {
    this.firstBatsman = { index: -1 }
    this.secondBatsman = { index: -1 }
    this.currentBowler = { index: -1 }
    this.wickets = []
    // this.bowlers = []
    this.currentScore = 0
    this.battingTeam = {}
    this.bowlingTeam = {}
  }

  assignBowler () {
    this.currentBowler = this.bowlingTeam.getRandomPlayer([
      this.currentBowler.index
    ])
  }

  assignFirstBatsman () {
    this.outBatsman(this.firstBatsman)
    this.firstBatsman = this.battingTeam.getRandomPlayer(
      Array(...this.wickets, this.firstBatsman, this.secondBatsman)
    )
  }

  assignSecondBatsman () {
    this.outBatsman(this.secondBatsman)
    this.secondBatsman = this.battingTeam.getRandomPlayer(
      Array(...this.wickets, this.firstBatsman, this.secondBatsman)
    )
  }

  outBatsman (player) {
    if (player.index != -1) {
      this.wickets.push(player.index)
    }
  }
}

module.exports = Scoreboard
