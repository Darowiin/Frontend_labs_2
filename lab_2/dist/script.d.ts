declare function findMinPositive(data: number[]): number;
declare const numbers: number[];
declare const result: number;
declare function booleanMatrix(data: string[][]): boolean[][];
declare const stringMatrix: string[][];
declare const booleanResult: boolean[][];
type NumberTuple = [number, number];
declare function sumOfDigits(num: number): number;
declare function areDigitSumsEqual(tuple: NumberTuple): boolean;
declare const booleanResult2: boolean;
declare enum aminoAcid {
    Adenine = "Adenine",
    Guanine = "Guanine",
    Cytosine = "Cytosine",
    Uracil = "Uracil",
    Tymine = "Tymine"
}
declare const Adenine: aminoAcid;
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function getPetInfo<T extends Pet>(pet: T): void;
declare const somePet: Pet;
declare const Barsik: Cat;
declare const AngryHunter: Dog;
interface Nucleotide {
    name: aminoAcid;
    formula: string;
    molecularWeight: number;
    isPyrimidine: boolean;
}
declare const adenine: Nucleotide;
