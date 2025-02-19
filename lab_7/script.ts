import { Transport } from "./module";

const owner1 = new Transport.Person("Иванов", "Иван", "Иванович", new Date("2000-05-15"), Transport.TypeDocument.Passport, "1234", "567890");
const owner2 = new Transport.Person("Смирнов", "Алексей", "Александрович", new Date("1995-07-20"), Transport.TypeDocument.Passport, "5678", "123456");
const owner3 = new Transport.Person("Петров", "Игорь", "Владимирович", new Date("1990-11-05"), Transport.TypeDocument.Passport, "9101", "234567");

const car1 = new Transport.Automobile("Toyota", "Corolla", 2020, "1HGCM82633A123456", "A123BC77", owner1, Transport.CarBodyType.Sedan, Transport.CarClass.Business);
const car2 = new Transport.Automobile("Honda", "Civic", 2019, "1HGCM82633A123457", "B123BC78", owner2, Transport.CarBodyType.SUV, Transport.CarClass.Business);
const car3 = new Transport.Automobile("Ford", "Focus", 2021, "3HGCM82633A123458", "C123BC79", owner3, Transport.CarBodyType.Hatchback, Transport.CarClass.Economy);

const storage = new Transport.StorageClass<Transport.Vehicle>();
storage.addVehicle(car1);
storage.addVehicle(car2);
storage.addVehicle(car3);

console.log('До сортировки:', storage.getAllVehicles());

storage.sortByLastName(true);
console.log('После сортировки по фамилии (по возрастанию):', storage.getAllVehicles());

storage.sortByLastName(false);
console.log('После сортировки по фамилии (по убыванию):', storage.getAllVehicles());

console.log('Поиск по префиксу "123":', storage.findByDocumentPrefix("123"));