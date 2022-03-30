class Scoreboard {
  constructor () {
    this.firstBatsman = { index: -1 }
    this.secondBatsman = { index: -1 }
    this.currentBowler = { index: -1 }
    this.wickets = 0
    this.score = 0
  }
}

module.exports = Scoreboard
