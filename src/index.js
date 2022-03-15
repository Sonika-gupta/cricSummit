const {
  Game,
  Team,
  Player,
  BowlCard,
  Scoreboard,
  Inquirer,
  Delivery
} = require('./Classes')
const { bowlTypes, shotTypes, shotTimings, teams } = require('./data')

main()

function main () {
  const game = initGame()
  game.startGame()
  //   console.dir(game)

  const inquirer = new Inquirer({ bowlTypes, shotTypes, shotTimings, teams })
  // begin(inquirer, game)
}

// async function begin (inquirer, game) {
//   let input
//   do {
//     input = await inquirer.getFunctionChoice()

//     switch (input.functionChoice) {
//       case inquirer.choices[0]: {
//         const input = await inquirer.getPredictionInput()
//         console.log(input)
//         const bowlCard = game.bowlCards.find(
//           card => card.value === input.bowlType
//         )
//         console.log(bowlCard)
//         const output = new Delivery({
//           bowlCard,
//           shotType: input.shotType,
//           shotTiming: input.shotTiming
//         }).outcome
//         console.log(output)
//         // getShotOutcome(Object.values(input).join(' '))
//         break
//       }
//       case inquirer.choices[1]: {
//         const input = await inquirer.getPredictionInput()
//         getCommentaryOutcome(Object.values(input).join(' '))
//         break
//       }
//       case inquirer.choices[2]: {
//         const { chasingTeamName, target } = await inquirer.getSuperOverInput()
//         const shotsPlayed = []
//         while (shotsPlayed.length != 6) {
//           const { shotType, shotTiming } = await inquirer.getShotPlayedInput(
//             shotsPlayed.length + 1
//           )
//           shotsPlayed.push([shotType, shotTiming])
//         }
//         getSuperOverCommentary(shotsPlayed, chasingTeamName, target)
//         startNewGame()
//         break
//       }
//     }
//   } while (input.functionChoice !== inquirer.choices[3])
// }

function initGame () {
  const bowlCards = initBowlCards()
  const teamA = initTeam(teams[0])
  const teamB = initTeam(teams[1])
  const scoreboard = new Scoreboard()
  return new Game({ bowlCards, teamA, teamB, overs: 20, scoreboard })
}

function initBowlCards () {
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
}

function initTeam ({ name, size, players }) {
  return new Team({
    name,
    size,
    players: players.map(p => new Player(p))
  })
}
