const utils = require('../utils.js')

class Team {
  constructor ({ name, size, players }) {
    this.name = name
    this.size = size
    this.players = players
    this.battingLine = []
    this.bowlers = []
    this.generateBattingLine()
    // this.assignBowlers()
  }

  getRandomPlayer (unavailableIndices = []) {
    let i
    do {
      i = utils.generateRandomIndex(this.size)
    } while (unavailableIndices.includes(i))
    return {
      ...this.players[i],
      index: i
    }
  }

  // assignBowlers () {
  //   const bowlersCount = 5
  //   for (let i = 0; i < bowlersCount; i++) {
  //     this.bowlers.push(this.getRandomPlayer(this.bowlers))
  //   }
  // }

  generateBattingLine () {
    this.battingLine.push(this.getRandomPlayer(this.battingLine))
  }

  getNextBatsman (wicket) {
    return this.battingLine[wicket]
  }

  getBowler () {
    // ASSUMING BOWLERS ARE CHOSEN RANDOMLY
    this.getRandomPlayer()
  }
}

module.exports = Team
