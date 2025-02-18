//Задание 1
function findMinPositive(data: number[]): number {
    let minElem: number | null = null;
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

function booleanMatrix(data: string[][]): boolean[][] {
    const result: boolean[][] = [];

    for (let i = 0; i < data.length; i++) {
        const row: boolean[] = [];
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

//Задание 2
type NumberTuple = [number, number];

function sumOfDigits(num: number): number {
    return Math.abs(num)
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);
}

function areDigitSumsEqual(tuple: NumberTuple): boolean {
    const [firstNum, secondNum] = tuple;
    const sumFirst = sumOfDigits(firstNum);
    const sumSecond = sumOfDigits(secondNum);

    return sumFirst == sumSecond;
}

const booleanResult2 = areDigitSumsEqual([143, 161]);
console.log(booleanResult2);

//Задание 3
enum aminoAcid {
    Adenine = "Adenine",
    Guanine = "Guanine",
    Cytosine = "Cytosine",
    Uracil = "Uracil",
    Tymine = "Tymine"
}
const Adenine: aminoAcid = aminoAcid.Adenine;
console.log(Adenine);

//Задание 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function getPetInfo<T extends Pet>(pet: T): void {
    console.log(`Type of pet is: ${pet.constructor.name}`);
    console.log(`Name of pet: ${pet.name}`);
    console.log(`Age of pet: ${pet.age}`);
    console.log(`Pet speaks: ${pet.speak()}`);
}
const somePet: Pet = new Pet;
getPetInfo(somePet);
const Barsik: Cat = new Cat;
getPetInfo(Barsik);
const AngryHunter: Dog = new Dog;
getPetInfo(AngryHunter);

//Задание 5
interface Nucleotide {
    name: aminoAcid;
    formula: string;
    molecularWeight: number;
    isPyrimidine: boolean;
}

const adenine: Nucleotide = {
    name: aminoAcid.Adenine,
    formula: "C5H5N5",
    molecularWeight: 135.13,
    isPyrimidine: false
};

console.log(JSON.stringify(adenine, null, 2));