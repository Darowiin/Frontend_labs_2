declare const remainder: (a: number, b: number) => number;
declare const result: number;
declare const person: {
    name: string;
    age: number;
};
declare const isActive: boolean;
declare const scores: number[];
declare const user: {
    id: number;
    username: string;
    isAdmin?: boolean;
};
declare let temperature: number;
declare let fruits: string[];
declare let settings: {
    theme: string;
    notificationsEnabled: boolean;
};
declare let nullableValue: string | null;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: number;
}
declare const data: ToJsonStringify;
declare const jsonData: string;
