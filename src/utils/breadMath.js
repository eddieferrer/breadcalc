/**
 * Returns Hydration
 * @param {number} flour - amount of flour in grams.
 * @param {number} water - amount of water in grams.
 * @returns {number} Percent
 */
export function calcHydration({ flour, water }) {
  return calcPercentage({ total: flour, target: water });
}

/**
 * Rounds to 2 decimal places if necessary
 * https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
 **/
export function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

export function calcPercentage({ total, target }) {
  return roundToTwo((target / total) * 100);
}

export function calcFromPercentage({ total, percentage }) {
  return roundToTwo((percentage / 100) * total);
}
