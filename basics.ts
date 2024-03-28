let age: number;

age = 12;
age: 0.1;

let userName: string;

userName = "max";

let isInstructed: boolean;

isInstructed = false;

let hobbies: any[];

hobbies = [12, 13, 1, 2, "q", true, {}];

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

// person = {};

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

// Union

let courseType: string | number = "Learning Typescript";
courseType = 123;

// course = 123;
