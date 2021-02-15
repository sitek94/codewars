// Roman numerals encoder
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/typescript

const symbols: [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

export function encoder(input: number): string {
  let inputLeft = input;
  let output = '';

  for (const [number, symbol] of symbols) {
    while (number <= inputLeft) {
      inputLeft -= number;
      output += symbol;
    }
  }

  return output;
}

console.clear();
console.log(encoder(1000));
