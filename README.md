# Mathematical expression solver with Genetic Algorithm (GA)


## Testrun

JavaScript ES6

```js
// Import the MathExpressionSolver
import MathExpressionSolver from 'math-expression-solver';

// Initialize our values
const THE_POPULATION_SIZE = 1000;
const THE_OBJECTIVE_FUNCTION = 9261; // the result of the formula
const THE_TOLERANCE = 0.5;
const THE_CHANCE_OF_MUTATION = 50;
const THE_ITERATIONS = 1000;
var THE_EXPRESSION = 'x^2+y^2+z^2'; // the formula to solve: looking for x, y, z

// Create the GA object
var mes = new MathExpressionSolver( THE_EXPRESSION,
                                    THE_OBJECTIVE_FUNCTION,
                                    THE_POPULATION_SIZE,
                                    THE_CHANCE_OF_MUTATION);

console.log('Calculating...\n');

// Evolve the solution
var theBest, result;
for (var i = 0; i < THE_ITERATIONS; i++){
  mes.evolveResult();
  theBest = mes.bestResult();
  result = mes.theGoodness(theBest);

  if ( result >= THE_OBJECTIVE_FUNCTION - THE_TOLERANCE &&
       result <= THE_OBJECTIVE_FUNCTION + THE_TOLERANCE ) break;

}
 // Print the result
console.log(':::THE RESULT:::');
console.log('Expression to solve: ' + THE_EXPRESSION + " = " + THE_OBJECTIVE_FUNCTION);
console.log('Number of iterations: ' + i);
console.log('The Best result:');
console.log('x = ' + theBest.x);
console.log('y = ' + theBest.y);
console.log('z = ' + theBest.z);
console.log('Result: ' + result);

```
