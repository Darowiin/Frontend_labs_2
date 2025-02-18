//Задание 2
const remainder = (a: number, b: number): number => a % b;

const result = remainder(10, 3);
console.log(result);

//Задание 3
const person: { name: string; age: number } = {
    name: "Иван",
    age: 30
};

const isActive: boolean = true;

const scores: number[] = [90, 85, 78];

const user: { id: number; username: string; isAdmin?: boolean } = {
    id: 1,
    username: "admin"
};

let temperature: number = 36.7;

let fruits: string[] = ["Яблоко", "Банан", "Груша"];

let settings: { theme: string; notificationsEnabled: boolean } = {
    theme: "dark",
    notificationsEnabled: true
};

let nullableValue: string | null = null;

//Задание 4
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: number;
}
const data: ToJsonStringify = {
    id: 6,
    e1: null,
    e2: 28,
}

const jsonData: string = JSON.stringify(data);
console.log(jsonData);