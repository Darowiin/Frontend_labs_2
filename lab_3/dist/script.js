var TypeDocument;
(function (TypeDocument) {
    TypeDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    TypeDocument["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    TypeDocument["IDCard"] = "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430";
})(TypeDocument || (TypeDocument = {}));
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
var CarBodyType;
(function (CarBodyType) {
    CarBodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    CarBodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    CarBodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
})(CarBodyType || (CarBodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
})(CarClass || (CarClass = {}));
class Automobile extends BaseVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    get bodyType() { return this._bodyType; }
    get carClass() { return this._carClass; }
    printInfo() {
        super.printInfo();
        console.log(`Тип кузова: ${this.bodyType}
            Класс автомобиля: ${this.carClass}`);
    }
}
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
const owner = new Person("Иванов", "Иван", "Иванович", new Date("2000-05-15"), TypeDocument.Passport, "1234", "567890");
const car = new Automobile("Toyota", "Corolla", 2020, "1HGCM82633A123456", "A123BC77", owner, CarBodyType.Sedan, CarClass.Business);
const bike = new Motorcycle("Yamaha", "YZF-R6", 2019, "JYARJ16E1FA012345", "B456DE77", owner, "Алюминиевая", true);
const storageClass = new StorageClass();
storageClass.addVehicle(car);
storageClass.addVehicle(bike);
car.printInfo();
bike.printInfo();
owner.printInfo();
console.log("Все транспортные средства:", storageClass.getAllVehicles());
