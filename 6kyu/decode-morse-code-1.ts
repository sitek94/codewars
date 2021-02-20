// Decode the Morse code part 1/3
// https://www.codewars.com/kata/54b724efac3d5402db00065e/solutions/typescript

import MORSE_CODE from '../util/morse-code-decode';

export function decodeMorse(morseCode: string) {
  return (
    morseCode
      .split('   ')
      .map(word => word.split(' '))
      .map(letters => letters.map(decode).join(''))
      .join(' ')
      .trim()
  );
}

function decode(char: string) {
  return hasOwnProperty(MORSE_CODE, char) ? MORSE_CODE[char] : '?';
}

function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y,
): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop);
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));