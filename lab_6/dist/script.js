"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const owner = new module_1.Transport.Person("Иванов", "Иван", "Иванович", new Date("2000-05-15"), module_1.Transport.TypeDocument.Passport, "1234", "567890");
const car = new module_1.Transport.Automobile("Toyota", "Corolla", 2020, "1HGCM82633A123456", "A123BC77", owner, module_1.Transport.CarBodyType.Sedan, module_1.Transport.CarClass.Business);
const bike = new module_1.Transport.Motorcycle("Yamaha", "YZF-R6", 2019, "JYARJ16E1FA012345", "B456DE77", owner, "Алюминиевая", true);
try {
    module_1.Transport.Automobile.prototype.newProperty = "color";
}
catch (error) {
    console.error("Не удалось изменить прототип: ", error);
}
const storageClass = new module_1.Transport.StorageClass();
storageClass.addVehicle(car);
storageClass.addVehicle(bike);
console.log(car.printInfo()); // Ожидается, что вся информация будет в верхнем регистре
bike.printInfo();
owner.printInfo();
console.log("Все транспортные средства:", storageClass.getAllVehicles());
