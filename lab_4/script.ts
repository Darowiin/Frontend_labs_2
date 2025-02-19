import { Transport } from "./module";

const owner = new Transport.Person("Иванов", "Иван", "Иванович", new Date("2000-05-15"), Transport.TypeDocument.Passport, "1234", "567890");
const car = new Transport.Automobile("Toyota", "Corolla", 2020, "1HGCM82633A123456", "A123BC77", owner, Transport.CarBodyType.Sedan, Transport.CarClass.Business);
const bike = new Transport.Motorcycle("Yamaha", "YZF-R6", 2019, "JYARJ16E1FA012345", "B456DE77", owner, "Алюминиевая", true);

const storageClass = new Transport.StorageClass<Transport.Vehicle>();
storageClass.addVehicle(car);
storageClass.addVehicle(bike);

car.printInfo();
bike.printInfo();
owner.printInfo();
console.log("Все транспортные средства:", storageClass.getAllVehicles());
