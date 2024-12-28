function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return a + b; 
  } else {
    return "Error: Inputs must be numbers";
  }
}

let result1 = addSafe(10, 20);  //Correct
let result2 = addSafe("hello", "world"); //Type Guard catches the error
let result3 = addSafe(10, "world"); //Type Guard catches the error

console.log(result1); // Output: 30
console.log(result2); // Output: Error: Inputs must be numbers
console.log(result3); // Output: Error: Inputs must be numbers