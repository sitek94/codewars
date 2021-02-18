// Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/typescript

export function multiplicationTable(size: number): number[][] {
  let table = [];

  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }

  return table;
}

console.log(multiplicationTable(3));
console.log(multiplicationTable(13));
