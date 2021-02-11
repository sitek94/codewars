// Human readable time
// https://www.codewars.com/kata/52685f7382004e774f0001f7/typescript

// My solution
function pad(n: number): string {
  return n.toFixed().padStart(2, '0');
}

function humanReadable(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return [h, m, s].map(pad).join(':');
}

