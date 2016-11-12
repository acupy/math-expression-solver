import GeneticAlgorithm from 'genetic-algorithm-fw';
import mexp from 'math-expression-evaluator';
import { getRandom } from '../lib/utils';

class Phenotype{
  constructor(x, y, z) {
    this.x = x || getRandom(100);
    this.y = y || getRandom(100);
    this.z = z || getRandom(100);
  }
}

export default class MathExpressionSolver{

  constructor(expression, theGoalFunction, populationSize, chanceOfMutation){

    this.geneticalgorithm = new GeneticAlgorithm(
      this.theMutationFunction,
      this.theCrossoverFunction,
      this.theFitnessFunction.bind(this),
      this.theCompetitionFunction.bind(this),
      [new Phenotype() ],
      populationSize,
      chanceOfMutation);

      this.expression = expression;
      this.theGoalFunction = theGoalFunction;
  }

  theMutationFunction(oldPhenotype) {
        return new Phenotype();
  }

  theCrossoverFunction (phenoTypeA, phenoTypeB) {
      var result1 = new Phenotype(phenoTypeA.x, phenoTypeB.y, phenoTypeA.z);
      var result2 = new Phenotype(phenoTypeB.x, phenoTypeA.y, phenoTypeB.z);
      return [result1,result2]
  }

  theFitnessFunction (phenotype) {
      var result = this.theGoodness(phenotype);
      var fitness = 1 / Math.abs(this.theGoalFunction - result);
      return fitness;
  }

  theCompetitionFunction(phenoTypeA, phenoTypeB) {
      return this.theFitnessFunction(phenoTypeA) >= this.theFitnessFunction(phenoTypeB);
  }

  theGoodness(phenotype){
    var theGoodnessExpression = this.expression.replace('x', phenotype.x).replace('y', phenotype.y).replace('z', phenotype.z)
    return mexp.eval(theGoodnessExpression);
  }

  evolveResult(){
    this.geneticalgorithm.evolve();
  }

  bestResult(){
    return this.geneticalgorithm.best();
  }
}
