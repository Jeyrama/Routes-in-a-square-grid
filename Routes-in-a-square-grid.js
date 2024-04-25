/*
Given a side length n, traveling only right and down, how many ways are there 
to get from the top left corner to the bottom right corner of an n by n grid?
Your mission is to write a program to do just that!

Add code to route(n) that returns the number of routes for a grid n by n 
(if n is less than 1 return 0).

Examples:
  -100 -> 0
  1 -> 2
  2 -> 6
  20 -> 137846528820

Note: 
  you're traveling on the edges of the squares in the grid, not the squares themselves.
*/


// Solution

const partialFactorial = (t, b) => Array(...Array(t - b)).map((_, i) => i + b + 1).reduce((p, c) => p * c, 1);
const factorial = n => partialFactorial(n, 1);
const routes = n => n > 0 ? Math.round(partialFactorial(2 * n, n) / factorial(n)) : 0;
