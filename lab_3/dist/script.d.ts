declare enum TypeDocument {
    Passport = 0,
    DriverLicense = 1,
    IDCard = 2
}
interface Owner {
    getLastName(): string;
    getFirstName(): string;
    getMiddleName(): string;
    getBirthDate(): Date;
    getTypeDocument(): TypeDocument;
    getDocumentSeries(): string;
    getDocumentNumber(): string;
    printInfo(): void;
}
declare class Person implements Owner {
    private lastName;
    private firstName;
    private middleName;
    private birthDate;
    private TypeDocument;
    private documentSeries;
    private documentNumber;
    constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, TypeDocument: TypeDocument, documentSeries: string, documentNumber: string);
    getLastName(): string;
    getFirstName(): string;
    getMiddleName(): string;
    getBirthDate(): Date;
    getTypeDocument(): TypeDocument;
    getDocumentSeries(): string;
    getDocumentNumber(): string;
    printInfo(): void;
}
interface Vehicle {
    getBrand(): string;
    getModel(): string;
    getYear(): number;
    getVin(): string;
    getRegistrationNumber(): string;
    getOwner(): Owner;
    printInfo(): void;
}
declare class BaseVehicle implements Vehicle {
    private brand;
    private model;
    private year;
    private vin;
    private registrationNumber;
    private owner;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
    getBrand(): string;
    getModel(): string;
    getYear(): number;
    getVin(): string;
    getRegistrationNumber(): string;
    getOwner(): Owner;
    printInfo(): void;
}
declare enum CarBodyType {
    Sedan = 0,
    SUV = 1,
    Hatchback = 2,
    Coupe = 3
}
declare enum CarClass {
    Economy = 0,
    Business = 1,
    Premium = 2
}
interface Car extends Vehicle {
    getBodyType(): CarBodyType;
    getCarClass(): CarClass;
}
declare class Automobile extends BaseVehicle implements Car {
    private bodyType;
    private carClass;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarBodyType, carClass: CarClass);
    getBodyType(): CarBodyType;
    getCarClass(): CarClass;
    printInfo(): void;
}
interface Motorbike extends Vehicle {
    getFrameType(): string;
    isSportBike(): boolean;
}
declare class Motorcycle extends BaseVehicle implements Motorbike {
    private frameType;
    private isSport;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isSport: boolean);
    getFrameType(): string;
    isSportBike(): boolean;
    printInfo(): void;
}
interface VehicleStorageClass<T extends Vehicle> {
    getCreationDate(): Date;
    getVehicles(): T[];
}
declare class StorageClass<T extends Vehicle> implements VehicleStorageClass<T> {
    private creationDate;
    private vehicles;
    constructor(creationDate: Date, vehicles?: T[]);
    getCreationDate(): Date;
    getVehicles(): T[];
}
declare const owner: Person;
declare const car: Automobile;
declare const bike: Motorcycle;
declare const storageClass: StorageClass<Vehicle>;
