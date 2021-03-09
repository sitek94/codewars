export function duplicateCount(text: string): number {
  let count = 0
  let letters = text.toLowerCase().split("")

  letters.reduce((lettersLeft, current) => {
    const oldLength = lettersLeft.length

    lettersLeft = lettersLeft.filter((letter) => letter !== current)

    const newLength = lettersLeft.length

    if (oldLength - newLength > 1) {
      count++
    }

    return lettersLeft
  }, letters)

  return count
}

console.log(duplicateCount("Indivisibilities"))
