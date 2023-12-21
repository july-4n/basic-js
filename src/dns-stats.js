const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsAppearances = {};

  for (let i = 0; i < domains.length; i++) {
    let str = domains[i].split('.').reverse();
    let currentDNS = '';
    for (let j = 0; j < str.length; j++) {
      currentDNS += `.${str[j]}`;
      dnsAppearances[currentDNS] = (dnsAppearances[currentDNS] || 0) + 1;
    }
  }
  return dnsAppearances;
}

module.exports = {
  getDNSStats
};
