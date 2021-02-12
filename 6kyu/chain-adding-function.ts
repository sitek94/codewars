console.clear();

// A chain adding function
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/javascript

// Solution
function add(x: number): any {
  const fn = (y: number) => add(x + y);
  fn.valueOf = () => x;
  return fn;
}

console.log(`When we log just this, we will get a function object\n`, add(1));
console.log(`But here add(1) will get coerced to a primitive value\n`, add(1) + 2);

// Some experimenting 
function test(x: number): any {
  console.log(x)
  return (y: number) => test(y);
}

test.valueOf = () => "Test Func";

test(1)(2)(3);

console.log(test + " got coerced to a primitive value");