//Задание 1
function getCurrentDate() {
    console.log(new Date().toLocaleTimeString());
}

window.onload = function () {
    let intervalId = setInterval(getCurrentDate, 5000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Остановка вывода времени.");
    }, 60000);
};
// npm install -g http-server
// http-server -p 8000

//Задание 2
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(`Текущее значение: ${count}`);
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // Текущее значение: 1
counter1(); // Текущее значение: 2
counter1(); // Текущее значение: 3

counter2(); // Текущее значение: 1
counter2(); // Текущее значение: 2
