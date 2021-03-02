// Tortoise racing
// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/typescript

export function race(v1: number, v2: number, g: number) {
  if (v1 >= v2) return null

  const timeInHours = g / (v2 - v1)
  const timeInSeconds = timeInHours * 3600

  const hh = Math.floor(timeInSeconds / 3600)
  const mm = Math.floor((timeInSeconds / 60) % 60)
  const ss = Math.floor((timeInSeconds) % 60)

  return [hh, mm, ss]
}

race(720, 850, 70)
