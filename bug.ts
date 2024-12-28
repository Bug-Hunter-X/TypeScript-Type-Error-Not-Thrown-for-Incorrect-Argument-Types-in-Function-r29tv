function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // Type error is not thrown at compile time
console.log(result); // Output: "helloworld"