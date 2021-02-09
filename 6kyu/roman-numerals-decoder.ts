/**
 * Roman Numerals Decoder
 * 
 * https://www.codewars.com/kata/51b6249c4612257ac0000005/train/typescript
 */

const symbols: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function solution(roman: string): number {
  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = symbols[roman[i]];
    const next = symbols[roman[i + 1]] || 0;

    if (current >= next) {
      total += current;
    } else {
      total -= current;
    }
  }

  return total;
}

console.log(solution('XXI')); // -> Should return 21
