const boxen = require('boxen')
const chalk = require('chalk')

module.exports = {
  options: {
    padding: 1,
    margin: 1,
    borderStyle: 'singleDouble',
    backgroundColor: '#333'
  },

  colorText: {
    comment: chalk.magenta,
    resultGood: chalk.green,
    resultAverage: chalk.cyan,
    resultBad: chalk.red,
    australia: chalk.yellow,
    india: chalk.blue,
    score: chalk.bold.whiteBright
  },

  printOutcome (message) {
    console.log(boxen(message, this.options))
  },

  printCommentary (commentary, result) {
    const message =
      this.decorate(commentary, 'comment') +
      ' - ' +
      this.decorate(result, 'result')
    console.log(boxen(message, this.options))
  },

  decorate (text, type) {
    if (this.colorText[type]) return this.colorText[type](text)

    if (type === 'result') {
      if (text.match(/1 wicket/)) return this.colorText.resultBad(text)
      if (text.match(/0 runs|1 run|2 runs|3 runs/))
        return this.colorText.resultAverage(text)
      if (text.match(/4 runs|5 runs|6 runs/))
        return this.colorText.resultGood(text)
    }
  }
}
