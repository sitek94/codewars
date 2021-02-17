// Digital root
// https://www.codewars.com/kata/541c8630095125aba6000c00/typescript

// My solution
export function digitalRoot(n: number): number {
  const sum = n
    .toFixed()
    .split('')
    .map(d => +d)
    .reduce((s, c) => s + c, 0);

  return sum > 9 ? digitalRoot(sum) : sum;
}
console.log(digitalRoot(456));

// Improved
export function improvedDigitalRoot(n: number): number {
  return n < 10
    ? n
    : improvedDigitalRoot(
        n
          .toFixed()
          .split('')
          .reduce((a, b) => a + Number(b), 0),
      );
}
console.log(improvedDigitalRoot(456));

// Using digital root formula
// https://mathworld.wolfram.com/DigitalRoot.html
export function cleverDigitalRoot(n: number): number {
  return 1 + ((n - 1) % 9);
}
console.log(cleverDigitalRoot(456));
