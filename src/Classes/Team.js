const utils = require('../utils.js')

class Team {
  constructor ({ name, size, players }) {
    this.name = name
    this.size = size
    this.players = players
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
}

module.exports = Team
