/**
 * Void datatype
 * It is usually used in functions
 * This means a function doesn't return anything
 */
const doSomething = (): void => {
    console.log('doSomething');
};

/**
 * Any type
 * - This is the worst in typescript because
 * - We can assign any data value to a variable given type any
 * - And we know that is bad in typescript
 */

let value: any;
value = 'a';
value = 10;
value = ['1', '2'];
value = true;

/**
 * Never type
 * This is a function that returns something that never happens
 * Or a function that never end
 * It's not a popular datatype because it is rarely used in a project
 */

const happenForever = (): never => {
    console.log('Happen forever');
    throw 'never';
};

/**
 * The unknown type
 * This looks like an alternative for any but they are different
 */

let make: any = 10;
let type2: unknown = 10;

// Type any never throws an error eg;
console.log(make.name());

// Type unknown throws an error because type doesn't know the type yet
// console.log(type2.name();)    => throws an error

/**
 * Type recersion
 * This is a way of changing the datatype
 * Let's go back to our unknown type to create an example
 */
let first: unknown = 'First Number';
// Changing our type 'unknown' to string using 'as' keyword or type
let second: string = first as string;

// Let's take another use case
let phone: string = '+233554989558';

let phoneNumber: number = phone as unknown as number;
