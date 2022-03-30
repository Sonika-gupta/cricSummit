const { Displayer, Controller, Inquirer } = require('./Objects')

;(async function begin () {
  const game = Controller.initGame()

  let input, delivery
  do {
    input = await Inquirer.getFunctionChoice()

    switch (input.functionChoice) {
      case Inquirer.choices[0]: {
        delivery = Controller.initDelivery(
          game,
          await Inquirer.getPredictionInput()
        )
        Displayer.printOutcome(delivery.getOutcome())
        break
      }
      case Inquirer.choices[1]: {
        delivery = Controller.initDelivery(
          game,
          await Inquirer.getPredictionInput()
        )
        const result = delivery.getOutcomeAndCommentary()
        Displayer.printCommentary(result.commentary, result.outcome)
        break
      }
      case Inquirer.choices[2]: {
        const { chasingTeamName, target } = await Inquirer.getSuperOverInput()
        const shotsPlayed = []
        while (shotsPlayed.length != 6) {
          const { shotType, shotTiming } = await Inquirer.getShotPlayedInput(
            shotsPlayed.length + 1
          )
          shotsPlayed.push([shotType, shotTiming])
        }
        getSuperOverCommentary(shotsPlayed, chasingTeamName, target)
        startNewGame()
        break
      }
    }
  } while (input.functionChoice !== Inquirer.choices[3])
})()
