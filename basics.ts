// Setting type as a feature of typescript
let age: number;
age = 12;

// Setting type to string
let userName: string;
userName = "max";

// Setting type to boolean
let isInstructed: boolean;
isInstructed = false;

// Setting type to any: taking typescript back to javascript
let hobbies: any[];
hobbies = [12, 13, 1, 2, "q", true, {}];

// Setting type object, which can allow multiple type
let person: {
  isEmployed: boolean;
  firstName: string;
  age: number;
};

person = {
  firstName: "max",
  age: 21,
  isEmployed: true,
};

// Setting type object in an array
let personArray: {
  isEmployed: boolean;
  firstName: string;
  age: number;
}[];

personArray = [
  {
    isEmployed: false,
    firstName: "Segun",
    age: 23,
  },
];

// Type inference
let course = "Learning Typescript";

// Union: setting more than one type
let courseType: string | number = "Learning Typescript";
courseType = 123;

// Type alias: you create a customized type, then you can assign it to any variable
type Learning = {
  name: string;
  course: string;
  student: number;
};

let vincentIsLearningTS: Learning;

vincentIsLearningTS = {
  name: "Vincent",
  course: "typescript",
  student: 30,
};

let vincentIsLearningTSArray: Learning[];

vincentIsLearningTSArray = [
  vincentIsLearningTS,
  {
    name: "tega",
    course: "backend",
    student: 1,
  },
];

// Function & type

function addNumber(a: number, b: number): number {
  return a + b;
}

// Generics<T>: to setting a general value which make it more flexibe when use function in typescript

function insertAtBegin<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegin(demoArray, -1);

const stringArray = insertAtBegin(["a", "b"], "d");

updatedArray[0].toPrecision(2);
