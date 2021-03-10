export function findOutlier(integers: number[]): number {
  const oddCount: number = integers.slice(0, 3).filter((n) => n % 2 !== 0).length
  const isOultierOdd: boolean = oddCount <= 1

  return integers.find((n) => (isOultierOdd ? n % 2 !== 0 : n % 2 === 0))!
}

console.log(findOutlier([2, 6, 8, 10, 3]))
