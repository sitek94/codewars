// Growth of a population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript

/**
 * @param p0 initial population at the beginning of a year
 * @param percent yearly population increase
 * @param aug inhabitants coming or leaving each year
 * @param p population to surpass
 * @returns number of entire years needed to get a population greater or equal to `p`
 */
export function nbYear(p0: number, percent: number, aug: number, p: number) {
  let population = p0
  let numberOfYears = 0

  while (population < p) {
    numberOfYears++
    population += population * (percent / 100) + aug
  }

  return numberOfYears
}

console.log(nbYear(1500, 5, 100, 5000))
