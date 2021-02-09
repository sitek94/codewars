// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c/typescript

type Arg = number[] | null;

// My solution
function comp(a1: Arg, a2: Arg) {
  if (a1 === null || a2 === null) {
    return false;
  }

  for (const num of a1) {
    if (a2.includes(num * num)) {
      a2.splice(a2.indexOf(num * num), 1);
    } else {
      return false;
    }
  }

  return true;
}

// Really clever solution
function cleverComp(a1: Arg, a2: Arg) {
  if (a1 === null || a2 === null) {
    return false;
  }

  const arr1 = a1
    .map((v) => v * v)
    .sort()
    .join('');
  const arr2 = a2.sort().join('');

  return arr1 === arr2;
}
