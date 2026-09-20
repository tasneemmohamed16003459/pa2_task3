// (a)
function mysterious(...args: number[]): void {
  const out = args.reduce((acc, num) => acc + num * num, 0);
  console.log(out);
}
mysterious(1, 2, 3);

// (b)
let age: number = 25;

function updateAge() {
  age = age + 5;
}

updateAge();
console.log("my age is", age);

// (c)
interface Employee {
  firstName: string;
  age: number;
  lastName?: string;
  salary?: number;
}

const employee: Employee = { firstName: "farid", age: 23 };
employee.lastName = "Mohamed";

const newEmployee: Employee = { ...employee, age: 24, salary: 3000 };
console.log(newEmployee);

// (d)
const output: string = false || [] ? "Invalid" : "Correct";
console.log("The Input Type is", output);

// (e)
function myFunction(x: any, y: any) {
  const { b: d, ...rest } = y;
  return { ...x, ...rest, d };
}
console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// (f)
function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// (g)
function reverseNumber(num: number): number {
  const reversed = Math.abs(num)
    .toString()
    .split('')
    .reverse()
    .join('');
  const result = parseInt(reversed, 10);
  return num < 0 ? -result : result;
}
console.log(reverseNumber(32243));

// (h)
function first<T>(arr: T[], n?: number): T | T[] {
  if (n === undefined) {
    return arr[0];
  }
  return arr.slice(0, n);
}

// (i)
function process(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  }
  return input * input;
}

// (j)
interface Person {
  readonly id: number;
  name: string;
  age: number;
  address?: string;
}

function createPerson(id: number, name: string, age: number, address?: string): Person {
  return { id, name, age, address };
}

const p = createPerson(1, "Tasneem", 21, "Cairo");
console.log("(j):", p);
