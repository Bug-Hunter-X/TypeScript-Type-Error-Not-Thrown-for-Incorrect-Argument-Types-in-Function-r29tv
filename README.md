# TypeScript Type Error Not Thrown for Incorrect Argument Types

This example demonstrates a situation where TypeScript fails to throw a type error at compile time. The `add` function is defined to accept two numbers and return their sum. However, when calling the function with string arguments, TypeScript allows the code to compile without any errors. This results in unexpected string concatenation during runtime.

## Bug
The `bug.ts` file contains the code that exhibits this behavior.  The function `add` should only accept numbers, but the code calls it with strings resulting in unexpected string concatenation.

## Solution
The `bugSolution.ts` file provides a solution that addresses this issue by using TypeScript's type guards to ensure type safety.