const {
  Game,
  Team,
  Player,
  BowlCard,
  Scoreboard,
  Delivery
} = require('../Classes')
const { bowlTypes, shotTypes, shotTimings, teams } = require('../data')

module.exports = {
  initGame () {
    const bowlCards = this.initBowlCards()
    const teamA = this.initTeam(teams[0])
    const teamB = this.initTeam(teams[1])
    return new Game({ bowlCards, teamA, teamB, overs: 20 })
  },

  initBowlCards () {
    const cards = []
    bowlTypes.forEach(type => {
      cards.push(
        new BowlCard({
          ...type,
          shotTypes: shotTypes.map(type => type.value)
        })
      )
    })
    return cards
  },

  initTeam: ({ name, size, players }) =>
    new Team({
      name,
      size,
      players: players.map(p => new Player(p))
    }),

  initDelivery (game, input) {
    const bowlCard = game.bowlCards.find(card => card.value === input.bowlType)
    const delivery = new Delivery({
      bowlCard,
      shotType: input.shotType,
      shotTiming: input.shotTiming
    })
    return delivery
  }
}
