function isPangram(phrase: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (const letter of alphabet) {
    const re = new RegExp(letter, 'gi');

    if (!phrase.match(re)) {
      return false;
    }
  }
  return true;
}
console.clear();
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));

function solutionWithSet(phrase: string): boolean {
  return new Set(phrase.match(/[a-z]/g)).size === 26;
}
