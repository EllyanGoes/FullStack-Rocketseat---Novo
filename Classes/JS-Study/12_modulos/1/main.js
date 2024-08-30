//As funções default não precisam de chaves
import sum, { multiply } from "./calc.js";

/*
import * as calc from "./calc";
console.log(calc.sum(1, 2));
console.log(calc.multiply(1, 2));
*/

console.log("a soma é", sum(1, 2));
console.log("a multiplicação é", multiply(1, 2));
