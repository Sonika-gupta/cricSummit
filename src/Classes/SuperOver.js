const Game = require('./Game')
const Scoreboard = require('./Scoreboard')

class SuperOver extends Game {
  constructor ({ game }) {
    super(game)
    this.bowlCards = []
  }

  setUp () {
    for (let i = 0; i < 6; i++) {
      this.bowlCards.push(
        super.bowlCards[generateRandomIndex(super.bowlCards.length)]
      )
    }
  }

  play () {
    this.setUp()

    // if (this.shotsPlayed.length < 6) throw errors.requiredSixEntries

    // const { bowler, batsman } = game.startSuperOver({
    //   target,
    //   battingTeamName: chasingTeamName
    // })

    // let result = null,
    //   commentary = []
    // for (let i = 0; i < shotsPlayed.length; i++) {
    //   const [shotType, shotTiming] = Array.isArray(shotsPlayed[i])
    //     ? shotsPlayed[i]
    //     : strToInput(shotsPlayed[i])

    //   const outcome = predictOutcome(
    //     superOverBowlCards[i],
    //     shotType,
    //     shotTiming
    //   )
    //   const comment = createCommentary({
    //     bowler,
    //     batsman: game.getCurrentBatsman(),
    //     bowlType: superOverBowlCards[i].name,
    //     shotType: shotType,
    //     shotTiming: shotTiming,
    //     outcome
    //   })
    //   commentary.push(comment)

    //   result = game.playDelivery(outcome)
    //   if (result) break
    // }

    // commentary.push(result || game.getResult())
    // return commentary
  }
}
