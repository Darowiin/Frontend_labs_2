//Задание 1
function findMinPositive(data) {
    let minElem = null;
    for (let i = 0; i < data.length; ++i) {
        if (data[i] > 0) {
            if (minElem === null || data[i] < minElem) {
                minElem = data[i];
            }
        }
    }
    return minElem;
}
const numbers = [-1, -2, 3, 4, 0, 2];
const result = findMinPositive(numbers);
console.log(result);
function booleanMatrix(data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const row = [];
        for (let j = 0; j < data[i].length; j++) {
            row.push(data[i][j].length % 2 !== 0);
        }
        result.push(row);
    }
    return result;
}
const stringMatrix = [
    ["hello", "world"],
    ["foo", "bar"],
    ["typescript", "is", "great"]
];
const booleanResult = booleanMatrix(stringMatrix);
console.log(booleanResult);
function sumOfDigits(num) {
    return Math.abs(num)
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);
}
function areDigitSumsEqual(tuple) {
    const [firstNum, secondNum] = tuple;
    const sumFirst = sumOfDigits(firstNum);
    const sumSecond = sumOfDigits(secondNum);
    return sumFirst == sumSecond;
}
const booleanResult2 = areDigitSumsEqual([143, 161]);
console.log(booleanResult2);
//Задание 3
var aminoAcid;
(function (aminoAcid) {
    aminoAcid["Adenine"] = "Adenine";
    aminoAcid["Guanine"] = "Guanine";
    aminoAcid["Cytosine"] = "Cytosine";
    aminoAcid["Uracil"] = "Uracil";
    aminoAcid["Tymine"] = "Tymine";
})(aminoAcid || (aminoAcid = {}));
const Adenine = aminoAcid.Adenine;
console.log(Adenine);
//Задание 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function getPetInfo(pet) {
    console.log(`Type of pet is: ${pet.constructor.name}`);
    console.log(`Name of pet: ${pet.name}`);
    console.log(`Age of pet: ${pet.age}`);
    console.log(`Pet speaks: ${pet.speak()}`);
}
const somePet = new Pet;
getPetInfo(somePet);
const Barsik = new Cat;
getPetInfo(Barsik);
const AngryHunter = new Dog;
getPetInfo(AngryHunter);
const adenine = {
    name: aminoAcid.Adenine,
    formula: "C5H5N5",
    molecularWeight: 135.13,
    isPyrimidine: false
};
console.log(JSON.stringify(adenine, null, 2));
