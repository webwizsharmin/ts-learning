const greeting: string = "TypeScript setup is completed!";

console.log(greeting);

// Primitives
/**
 * Primitives are the fundamentals or built-in data types which are directly inherited from JavaScript.
 *
 * There 7 types of primitives in TypeScript.Such as, string, number, boolean,null, undefined, symbol,and bigint.
 */

// Examples
let name: string = "Ruhail";
let anotherName = "Ruhail"; //best practice

// number
let age: number = 7;

// Objects

/**
 * the obeject type is a structured blueprint used to group related data into key-value pairs while explicitely declaring what data types those keys must hold.
 *
 * There are three types ways to define an object types.
 *
 * Inline, aliases, Interfaces
 */

// 1. Inline
const user: { name: string; age: number; isAdmin: boolean } = {
  name: "Ruhail",
  age: 32,
  isAdmin: false,
};

// 2. Type Aliases
type Product = {
  id: number;
  title: string;
  price: number;
  discountCode?: string; // ? optional property(can be ommited)
  readonly sku: string; //Readonly property (cannot be modified after creation)
};

const shirt: Product = {
  id: 101,
  title: "Vintage T-Shirt",
  price: 50,
  sku: "TS-101-VNTG",
};

// 3. Interfaces
interface Vehicle {
  make: string;
  model: string;
}

// can easily extend other interfaces
interface ElectricCar extends Vehicle {
  batteryCapacity: number;
}

const myTesla: ElectricCar = {
  make: "Tesla",
  model: "Model 3",
  batteryCapacity: 75,
};

// Array
/**
 * A collection of values of the same or structured data types stored sequentially under a single variable name.
 *
 * There are two ways to declare arrays. such as: square bracket Notation(type[]) , Generic Array Syntax(Array<type>)
 *
 */

// Square bracket notation
let standardPrices: number[] = [10, 20, 30];

// Generic array syntax
let activeUsernames: Array<string> = ["Rahima", "Ubaida", "Sadiya"];

// there are also some advance variations of arrays. they are, array of objects, mixed / unions types , readonly arrays etc.
