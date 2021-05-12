/* TypeScript file generated from Util.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'rescript/lib/es6/curry.js';
const Curry: any = Curry__Es6Import;

// @ts-ignore: Implicit any on import
import * as UtilBS__Es6Import from './Util.bs';
const UtilBS: any = UtilBS__Es6Import;

export const add: (a:number, b:number) => number = function (Arg1: any, Arg2: any) {
  const result = Curry._2(UtilBS.add, Arg1, Arg2);
  return result
};
