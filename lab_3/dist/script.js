var TypeDocument;
(function (TypeDocument) {
    TypeDocument[TypeDocument["Passport"] = 0] = "Passport";
    TypeDocument[TypeDocument["DriverLicense"] = 1] = "DriverLicense";
    TypeDocument[TypeDocument["IDCard"] = 2] = "IDCard";
})(TypeDocument || (TypeDocument = {}));
class Person {
    constructor(lastName, firstName, middleName, birthDate, TypeDocument, documentSeries, documentNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.TypeDocument = TypeDocument;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }
    getLastName() { return this.lastName; }
    getFirstName() { return this.firstName; }
    getMiddleName() { return this.middleName; }
    getBirthDate() { return this.birthDate; }
    getTypeDocument() { return this.TypeDocument; }
    getDocumentSeries() { return this.documentSeries; }
    getDocumentNumber() { return this.documentNumber; }
    printInfo() {
        console.log(`Владелец: ${this.lastName} ${this.firstName} ${this.middleName}, Дата рождения: ${this.birthDate.toDateString()}, ` +
            `Документ: ${TypeDocument[this.TypeDocument]} ${this.documentSeries} ${this.documentNumber}`);
    }
}
class BaseVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    getBrand() { return this.brand; }
    getModel() { return this.model; }
    getYear() { return this.year; }
    getVin() { return this.vin; }
    getRegistrationNumber() { return this.registrationNumber; }
    getOwner() { return this.owner; }
    printInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}, ` +
            `VIN: ${this.vin}, Регистрационный номер: ${this.registrationNumber}`);
    }
}
var CarBodyType;
(function (CarBodyType) {
    CarBodyType[CarBodyType["Sedan"] = 0] = "Sedan";
    CarBodyType[CarBodyType["SUV"] = 1] = "SUV";
    CarBodyType[CarBodyType["Hatchback"] = 2] = "Hatchback";
    CarBodyType[CarBodyType["Coupe"] = 3] = "Coupe";
})(CarBodyType || (CarBodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass[CarClass["Economy"] = 0] = "Economy";
    CarClass[CarClass["Business"] = 1] = "Business";
    CarClass[CarClass["Premium"] = 2] = "Premium";
})(CarClass || (CarClass = {}));
class Automobile extends BaseVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.bodyType = bodyType;
        this.carClass = carClass;
    }
    getBodyType() { return this.bodyType; }
    getCarClass() { return this.carClass; }
    printInfo() {
        super.printInfo();
        console.log(`Тип кузова: ${CarBodyType[this.bodyType]}, Класс: ${CarClass[this.carClass]}`);
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
    constructor(creationDate, vehicles = []) {
        this.creationDate = creationDate;
        this.vehicles = vehicles;
    }
    getCreationDate() { return this.creationDate; }
    getVehicles() { return this.vehicles; }
}
const owner = new Person("Иванов", "Иван", "Иванович", new Date("2000-05-15"), TypeDocument.Passport, "1234", "567890");
const car = new Automobile("Toyota", "Corolla", 2020, "1HGCM82633A123456", "A123BC77", owner, CarBodyType.Sedan, CarClass.Business);
const bike = new Motorcycle("Yamaha", "YZF-R6", 2019, "JYARJ16E1FA012345", "B456DE77", owner, "Алюминиевая", true);
const storageClass = new StorageClass(new Date());
storageClass.getVehicles().push(car, bike);
car.printInfo();
bike.printInfo();
owner.printInfo();
console.log("Все транспортные средства:", storageClass.getVehicles());
