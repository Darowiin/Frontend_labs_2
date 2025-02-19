export declare namespace Transport {
    enum TypeDocument {
        Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        DriverLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",
        IDCard = "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430"
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
        private _brand;
        private _model;
        private _year;
        private _vin;
        private _registrationNumber;
        private _owner;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
        get brand(): string;
        get model(): string;
        get year(): number;
        get vin(): string;
        get registrationNumber(): string;
        get owner(): Owner;
        printInfo(): void;
    }
    class Person implements Owner {
        private _lastName;
        private _firstName;
        private _middleName;
        private _birthDate;
        private _TypeDocument;
        private _documentSeries;
        private _documentNumber;
        constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, TypeDocument: TypeDocument, documentSeries: string, documentNumber: string);
        get lastName(): string;
        get firstName(): string;
        get middleName(): string;
        get birthDate(): Date;
        get TypeDocument(): TypeDocument;
        get documentSeries(): string;
        get documentNumber(): string;
        printInfo(): void;
    }
    enum CarBodyType {
        Sedan = "\u0421\u0435\u0434\u0430\u043D",
        SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
        Hatchback = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A"
    }
    enum CarClass {
        Economy = "\u042D\u043A\u043E\u043D\u043E\u043C",
        Business = "\u0411\u0438\u0437\u043D\u0435\u0441",
        Premium = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C"
    }
    interface Car extends Vehicle {
        bodyType: CarBodyType;
        carClass: CarClass;
    }
    class Automobile extends BaseVehicle implements Car {
        private _bodyType;
        private _carClass;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarBodyType, carClass: CarClass);
        get bodyType(): CarBodyType;
        get carClass(): CarClass;
        printInfo(): void;
    }
    interface Motorbike extends Vehicle {
        getFrameType(): string;
        isSportBike(): boolean;
    }
    class Motorcycle extends BaseVehicle implements Motorbike {
        private frameType;
        private isSport;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isSport: boolean);
        getFrameType(): string;
        isSportBike(): boolean;
        printInfo(): void;
    }
    interface VehicleStorage<T extends Vehicle> {
        createdAt: Date;
        vehicles: T[];
        sortByLastName(increasingOrder: boolean): void;
        findByDocumentPrefix(prefix: string): T[];
        getAllVehicles(): T[];
    }
    class StorageClass<T extends Vehicle> implements VehicleStorage<T> {
        createdAt: Date;
        vehicles: T[];
        constructor();
        sortByLastName(increasingOrder?: boolean): void;
        findByDocumentPrefix(prefix: string): T[];
        getAllVehicles(): T[];
        addVehicle(vehicle: T): void;
    }
}
