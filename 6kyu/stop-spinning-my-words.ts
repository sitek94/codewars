// Stop spinning my words
// https://www.codewars.com/kata/5264d2b162488dc400000001/typescript

export function spinWords(words: string): string {
  return words
    .split(" ")
    .map((word) => (word.length >= 5 ? reverse(word) : word))
    .join(" ")
}

function reverse(str: string) {
  return str.split("").reverse().join("")
}
