enum TypeDocument {
    Passport,
    DriverLicense,
    IDCard
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

class Person implements Owner {
    constructor(
        private lastName: string,
        private firstName: string,
        private middleName: string,
        private birthDate: Date,
        private TypeDocument: TypeDocument,
        private documentSeries: string,
        private documentNumber: string
    ) {}

    getLastName(): string { return this.lastName; }
    getFirstName(): string { return this.firstName; }
    getMiddleName(): string { return this.middleName; }
    getBirthDate(): Date { return this.birthDate; }
    getTypeDocument(): TypeDocument { return this.TypeDocument; }
    getDocumentSeries(): string { return this.documentSeries; }
    getDocumentNumber(): string { return this.documentNumber; }

    printInfo(): void {
        console.log(`Владелец: ${this.lastName} ${this.firstName} ${this.middleName}, Дата рождения: ${this.birthDate.toDateString()}, ` +
                    `Документ: ${TypeDocument[this.TypeDocument]} ${this.documentSeries} ${this.documentNumber}`);
    }
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

class BaseVehicle implements Vehicle {
    constructor(
        private brand: string,
        private model: string,
        private year: number,
        private vin: string,
        private registrationNumber: string,
        private owner: Owner
    ) {}

    getBrand(): string { return this.brand; }
    getModel(): string { return this.model; }
    getYear(): number { return this.year; }
    getVin(): string { return this.vin; }
    getRegistrationNumber(): string { return this.registrationNumber; }
    getOwner(): Owner { return this.owner; }

    printInfo(): void {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}, ` +
                    `VIN: ${this.vin}, Регистрационный номер: ${this.registrationNumber}`);
    }
}

enum CarBodyType {
    Sedan,
    SUV,
    Hatchback,
    Coupe
}

enum CarClass {
    Economy,
    Business,
    Premium
}

interface Car extends Vehicle {
    getBodyType(): CarBodyType;
    getCarClass(): CarClass;
}

class Automobile extends BaseVehicle implements Car {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        private bodyType: CarBodyType,
        private carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    getBodyType(): CarBodyType { return this.bodyType; }
    getCarClass(): CarClass { return this.carClass; }

    printInfo(): void {
        super.printInfo();
        console.log(`Тип кузова: ${CarBodyType[this.bodyType]}, Класс: ${CarClass[this.carClass]}`);
    }
}

interface Motorbike extends Vehicle {
    getFrameType(): string;
    isSportBike(): boolean;
}

class Motorcycle extends BaseVehicle implements Motorbike {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        private frameType: string,
        private isSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    getFrameType(): string { return this.frameType; }
    isSportBike(): boolean { return this.isSport; }

    printInfo(): void {
        super.printInfo();
        console.log(`Тип рамы: ${this.frameType}, Для спорта: ${this.isSport ? 'Да' : 'Нет'}`);
    }
}

interface VehicleStorageClass<T extends Vehicle> {
    getCreationDate(): Date;
    getVehicles(): T[];
}

class StorageClass<T extends Vehicle> implements VehicleStorageClass<T> {
    constructor(
        private creationDate: Date,
        private vehicles: T[] = []
    ) {}

    getCreationDate(): Date { return this.creationDate; }
    getVehicles(): T[] { return this.vehicles; }
}

const owner = new Person("Иванов", "Иван", "Иванович", new Date("2000-05-15"), TypeDocument.Passport, "1234", "567890");
const car = new Automobile("Toyota", "Corolla", 2020, "1HGCM82633A123456", "A123BC77", owner, CarBodyType.Sedan, CarClass.Business);
const bike = new Motorcycle("Yamaha", "YZF-R6", 2019, "JYARJ16E1FA012345", "B456DE77", owner, "Алюминиевая", true);

const storageClass = new StorageClass<Vehicle>(new Date());
storageClass.getVehicles().push(car, bike);

car.printInfo();
bike.printInfo();
owner.printInfo();
console.log("Все транспортные средства:", storageClass.getVehicles());
