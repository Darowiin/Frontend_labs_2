enum TypeDocument {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "Идентификационная карта"
}

interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    TypeDocument: TypeDocument;
    documentSeries: string;
    documentNumber: string;

    printInfo(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;

    printInfo(): void;
}

class BaseVehicle implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get registrationNumber() { return this._registrationNumber; }
    get owner() { return this._owner; }

    printInfo(): void {
        console.log(`Транспортное средство:
            Марка: ${this.brand}
            Модель: ${this.model}
            Год выпуска: ${this.year}
            VIN: ${this.vin}
            Регистрационный номер: ${this.registrationNumber}`);
    }
}

class Person implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _TypeDocument: TypeDocument;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(
        lastName: string,
        firstName: string,
        middleName: string,
        birthDate: Date,
        TypeDocument: TypeDocument,
        documentSeries: string,
        documentNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._TypeDocument = TypeDocument;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

    get lastName() { return this._lastName; }
    get firstName() { return this._firstName; }
    get middleName() { return this._middleName; }
    get birthDate() { return this._birthDate; }
    get TypeDocument() { return this._TypeDocument; }
    get documentSeries() { return this._documentSeries; }
    get documentNumber() { return this._documentNumber; }

    printInfo(): void {
        console.log(`Владелец:
            Фамилия: ${this.lastName}
            Имя: ${this.firstName}
            Отчество: ${this.middleName}
            Дата рождения: ${this.birthDate.toLocaleDateString()}
            Тип документа: ${this.TypeDocument}
            Серия документа: ${this.documentSeries}
            Номер документа: ${this.documentNumber}`);
    }
}

enum CarBodyType {
    Sedan = "Седан",
    SUV = "Внедорожник",
    Hatchback = "Хэтчбек"
}

enum CarClass {
    Economy = "Эконом",
    Business = "Бизнес",
    Premium = "Премиум"
}

interface Car extends Vehicle {
    bodyType: CarBodyType;
    carClass: CarClass;
}

class Automobile extends BaseVehicle implements Car {
    private _bodyType: CarBodyType;
    private _carClass: CarClass;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: CarBodyType,
        carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get bodyType() { return this._bodyType; }
    get carClass() { return this._carClass; }

    printInfo(): void {
        super.printInfo();
        console.log(`Тип кузова: ${this.bodyType}
            Класс автомобиля: ${this.carClass}`);
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


interface VehicleStorage<T extends Vehicle> {
    createdAt: Date;
    vehicles: T[];

    getAllVehicles(): T[];
}

class StorageClass<T extends Vehicle> implements VehicleStorage<T> {
    createdAt: Date;
    vehicles: T[];

    constructor() {
        this.createdAt = new Date();
        this.vehicles = [];
    }

    getAllVehicles(): T[] {
        return this.vehicles;
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }
}
const owner = new Person("Иванов", "Иван", "Иванович", new Date("2000-05-15"), TypeDocument.Passport, "1234", "567890");
const car = new Automobile("Toyota", "Corolla", 2020, "1HGCM82633A123456", "A123BC77", owner, CarBodyType.Sedan, CarClass.Business);
const bike = new Motorcycle("Yamaha", "YZF-R6", 2019, "JYARJ16E1FA012345", "B456DE77", owner, "Алюминиевая", true);

const storageClass = new StorageClass<Vehicle>();
storageClass.addVehicle(car);
storageClass.addVehicle(bike);

car.printInfo();
bike.printInfo();
owner.printInfo();
console.log("Все транспортные средства:", storageClass.getAllVehicles());
