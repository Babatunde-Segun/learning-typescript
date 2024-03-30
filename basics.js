var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Setting type as a feature of typescript
var age;
age = 12;
// Setting type to string
var userName;
userName = "max";
// Setting type to boolean
var isInstructed;
isInstructed = false;
// Setting type to any: taking typescript back to javascript
var hobbies;
hobbies = [12, 13, 1, 2, "q", true, {}];
// Setting type object, which can allow multiple type
var person;
person = {
    firstName: "max",
    age: 21,
    isEmployed: true,
};
// Setting type object in an array
var personArray;
personArray = [
    {
        isEmployed: false,
        firstName: "Segun",
        age: 23,
    },
];
// Type inference
var course = "Learning Typescript";
// Union: setting more than one type
var courseType = "Learning Typescript";
courseType = 123;
var vincentIsLearningTS;
vincentIsLearningTS = {
    name: "Vincent",
    course: "typescript",
    student: 30,
};
var vincentIsLearningTSArray;
vincentIsLearningTSArray = [
    vincentIsLearningTS,
    {
        name: "tega",
        course: "backend",
        student: 1,
    },
];
// Function & type
function add(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(["a", "b"], "d");
var aArray = stringArray.push("a");
console.log(aArray);
updatedArray[0].toPrecision(2);
