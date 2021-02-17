// Valid braces
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/typescript

// Regex solution with while loop
export function validBraces1(braces: string): boolean {
  const re = /(\[\])|(\(\))|(\{\})/g;

  while (re.test(braces)) {
    braces = braces.replace(re, '');
  }

  return braces.length === 0;
}

console.log(validBraces1('(((({)))'));
console.log(validBraces1('([{}]){}()'));

// Recursive solution
export function validBraces2(braces: string): boolean {
  if (braces.length % 2 !== 0) return false;

  const lengthBefore = braces.length;
  braces = braces.replace('{}', '');
  braces = braces.replace('[]', '');
  braces = braces.replace('()', '');
  const lengthAfter = braces.length;

  if (lengthAfter === lengthBefore) return false;
  if (braces.length === 0) return true;

  return validBraces2(braces);
}

console.log(validBraces2('([{}]){}()'));
console.log(validBraces2('(((({)))'));
