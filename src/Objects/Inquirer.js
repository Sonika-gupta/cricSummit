const inquirer = require('inquirer')
const { bowlTypes, shotTypes, shotTimings, teams } = require('../data')

module.exports = {
  bowlTypes: bowlTypes,
  shotTypes: shotTypes,
  shotTimings: shotTimings,
  teams: teams,
  input: {},
  choices: [
    'Predict Outcome',
    'Get Commentary With Outcome',
    'Play Super Over',
    'Exit'
  ],

  getFunctionChoice () {
    const questions = [
      {
        type: 'list',
        name: 'functionChoice',
        message: 'Welcome to CricSummit 2021. What would you like to do?',
        choices: this.choices,
        default: this.choices[0]
      }
    ]
    return inquirer.prompt(questions)
  },

  getPredictionInput () {
    const questions = [
      {
        type: 'rawlist',
        name: 'bowlType',
        message: 'Select Bowl Type Card',
        choices: this.bowlTypes,
        default: this.bowlTypes[0]
      },
      {
        type: 'rawlist',
        name: 'shotType',
        message: 'Select Shot Type Card',
        choices: this.shotTypes,
        default: this.shotTypes[0]
      },
      {
        type: 'rawlist',
        name: 'shotTiming',
        message: 'Select Shot Timing',
        choices: this.shotTimings,
        default: this.shotTimings[0]
      }
    ]
    return inquirer.prompt(questions)
  },

  getSuperOverInput () {
    const questions = [
      {
        type: 'rawlist',
        name: 'chasingTeamName',
        message: 'Which team is chasing?',
        choices: this.teams.map(team => ({
          name: team.name.toUpperCase(),
          value: team.name
        })),
        default: this.teams[1].name
      },
      {
        type: 'input',
        name: 'target',
        message: 'Enter the Target Score: ',
        validate: function (value) {
          if (value && !isNaN(Number(value))) return true
          else
            return 'Required a numerical target score, received' + typeof value
        }
      }
    ]
    return inquirer.prompt(questions)
  },

  getShotPlayedInput (ballNumber) {
    const questions = [
      {
        type: 'rawlist',
        name: 'shotType',
        message: `Ball ${ballNumber}: Shot Type`,
        choices: this.shotTypes,
        default: this.shotTypes[0]
      },
      {
        type: 'rawlist',
        name: 'shotTiming',
        message: `Ball ${ballNumber}: Shot Timing`,
        choices: this.shotTimings,
        default: this.shotTimings[0]
      }
    ]
    return inquirer.prompt(questions)
  }
}
