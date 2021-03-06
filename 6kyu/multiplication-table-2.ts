export function multiplicationTable(row: number, column: number): number[][] {
  let table: number[][] = []

  for (let i = 1; i <= row; i++) {
    let tableRow = []

    for (let j = 1; j <= column; j++) {
      tableRow.push(i * j)
    }

    table.push(tableRow)
  }

  return table
}

console.log(multiplicationTable(3,4))