// Max ball
// https://www.codewars.com/kata/566be96bb3174e155300001b/javascript

export function maxBall(v: number) {
  let maxHeight = 0;
  
  for (let t = 0; ; t++) {
    let h = calcHeight(v / 3.6, t / 10);
    
    if (h >= maxHeight) {
      maxHeight = h;
    } else {
      return t - 1;
    }
  }
}

console.log(maxBall2(37));

function calcHeight(v: number, t: number) {
  const G = 9.81;
  return v * t - 0.5 * G * t * t;
}

// G = 9.81
// th = v0 * sin(α) / G
// sin(α) = 1
// th = v0 * 1 / 9.81 * 10 

function maxBall2(v: number) {
  return Math.round(th(v / 3.6, 90) * 10);
}

function th(v0: number, deg: number) {
  const G = 9.81;
  return v0 * Math.sin(toRad(deg)) / G;
}

function toRad(deg: number) {
  return deg * (Math.PI / 180);
}

console.log(maxBall2(37));
