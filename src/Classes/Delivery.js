const errors = require('../Constants/errors')
const utils = require('../utils.js')

class Delivery {
  constructor (bowlCard, shotType, shotTiming) {
    this.bowlCard = bowlCard
    this.shotType = shotType
    this.shotTiming = shotTiming
    this.outcome = this.predictOutcome()
  }

  predictOutcome (predictionModel, outcomes) {
    const hitProbability = this.bowlCard.getHitProbability(this.shotType)
    if (!hitProbability) throw errors.invalidShotType

    if (!predictionModel[this.shotTiming]) throw errors.invalidShotTiming

    for (let { minProb, outcomes } of predictionModel[this.shotTiming]) {
      if (hitProbability >= minProb) {
        return outcomes[utils.generateRandomIndex(outcomes.length)]
      }
    }
    return predictionModel.default[
      utils.generateRandomIndex(predictionModel.default.length)
    ]
  }
}

module.exports = Delivery
