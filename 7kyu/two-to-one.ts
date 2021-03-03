// Two to one
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/typescript

export function longest(s1: string, s2: string): string {
  return Array.from(new Set((s1 + s2).split("")))
    .sort()
    .join("")
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
