"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let TypeDocument;
    (function (TypeDocument) {
        TypeDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        TypeDocument["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        TypeDocument["IDCard"] = "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430";
    })(TypeDocument = Transport.TypeDocument || (Transport.TypeDocument = {}));
    class BaseVehicle {
        constructor(brand, model, year, vin, registrationNumber, owner) {
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
        printInfo() {
            console.log(`Транспортное средство:
                Марка: ${this.brand}
                Модель: ${this.model}
                Год выпуска: ${this.year}
                VIN: ${this.vin}
                Регистрационный номер: ${this.registrationNumber}`);
        }
    }
    Transport.BaseVehicle = BaseVehicle;
    class Person {
        constructor(lastName, firstName, middleName, birthDate, TypeDocument, documentSeries, documentNumber) {
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
        printInfo() {
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
    Transport.Person = Person;
    let CarBodyType;
    (function (CarBodyType) {
        CarBodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        CarBodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        CarBodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    })(CarBodyType = Transport.CarBodyType || (Transport.CarBodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    //Задание 2
    function blockChangePrototype(constructor) {
        Object.freeze(constructor.prototype);
        return constructor;
    }
    //Задание 3
    function uppercaseOutput(target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const result = originalMethod.apply(this, args);
            return typeof result === 'string' ? result.toUpperCase() : result;
        };
        return descriptor;
    }
    let Automobile = class Automobile extends BaseVehicle {
        constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        get bodyType() { return this._bodyType; }
        set bodyType(value) { this._bodyType = value; }
        get carClass() { return this._carClass; }
        set carClass(value) { this._carClass = value; }
        printInfo() {
            const baseInfo = super.printInfo();
            return `${baseInfo}\nТип кузова: ${this.bodyType}\nКласс автомобиля: ${this.carClass}`;
        }
    };
    __decorate([
        uppercaseOutput
    ], Automobile.prototype, "printInfo", null);
    Automobile = __decorate([
        blockChangePrototype
    ], Automobile);
    Transport.Automobile = Automobile;
    class Motorcycle extends BaseVehicle {
        constructor(brand, model, year, vin, registrationNumber, owner, frameType, isSport) {
            super(brand, model, year, vin, registrationNumber, owner);
            this.frameType = frameType;
            this.isSport = isSport;
        }
        getFrameType() { return this.frameType; }
        isSportBike() { return this.isSport; }
        printInfo() {
            super.printInfo();
            console.log(`Тип рамы: ${this.frameType}, Для спорта: ${this.isSport ? 'Да' : 'Нет'}`);
        }
    }
    Transport.Motorcycle = Motorcycle;
    class StorageClass {
        constructor() {
            this.createdAt = new Date();
            this.vehicles = [];
        }
        getAllVehicles() {
            return this.vehicles;
        }
        addVehicle(vehicle) {
            this.vehicles.push(vehicle);
        }
    }
    Transport.StorageClass = StorageClass;
})(Transport || (exports.Transport = Transport = {}));
