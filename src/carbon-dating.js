const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || (typeof sampleActivity) !== 'string') {
    return false;
  }

  const ln2 = 0.693;
  const oldActivity = +sampleActivity;

  if (oldActivity > 0 && oldActivity < MODERN_ACTIVITY) {
    const k = ln2 / HALF_LIFE_PERIOD;
    const t = Math.ceil(Math.log(MODERN_ACTIVITY / oldActivity) / k);
    return t;
  }

  return false;
}

module.exports = {
  dateSample
};
