// function showMessage(message) {
//     console.log(message);
// }
// showMessage("Hello");
// showMessage("Hi");
// showMessage("Привет");
// function sum(a = 0, b = 0) {
//     return a + b;
// }

// const result = sum(9, 8);
// console.log(result);
// console.log(sum(4, 6));

// function positiveSum(a, b) {
//     if (a > 0 && b > 0) {
//         return a + b;
//     }
//     return "Ошибка вычисления";
// }

// console.log(positiveSum(2, 3));
// console.log(positiveSum(2, -3));
// console.log(Math.random()); // возвращает число от 0 до 1

// function getName() {
//     const userName = 'Alex';
//     return userName;
// }
// function getUserName() {
//     const userName = 'Ivan';
//     return userName;
// }
// // console.log(userName); // Ошибка, область видимости переменной
// console.log(getName());
// console.log(getUserName());

// let name = "Alex";
// function sayHello(message = "Hello") {
//     name = "Ivan";
//     console.log(`${message} - ${name}!`);
// }
// В данном примере функция не чистая
// console.log(name);
// sayHello();
// console.log(name);

// Практика
// 1
// function greeting(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }
// greeting("dfgh");

// 2
// function exponentiation(a, b = 1) {
//     console.log( a ** b);
// }
// exponentiation(2, 10);

// 3
// function abs(arr) {
//     if (arr === undefined) {
//         console.log("Массив не задан");
//     } else {
//         sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i];
//         }
//         console.log(sum / arr.length);
//     }
// }
// const mass = [7, 4, 9, 3, 6, -6, -3];
// abs();

// Синтаксис функций
// const sayHello = function (name) {
//     console.log(`Hello, ${name}!`);
// };

// const funcExample = function (callback) {
//     for (let i = 0; i < 1000000000; i += 1) {}
//     // сначала будет выполнена итерация, а после функция callback
//     callback("Sergey");
// };
// sayHello("Alex"); // выполнится первым
// funcExample(sayHello); // выполнятся итерации, а затем выполнится callback
// sayHello("Max"); // выполнится в конце

// sum(2, 3);

// function multiply(a, b, callback) {
//     console.log(callback(2, 3));
//     console.log(a * b);
// }
// function sum(a, b) {
//     return a + b;
// }
// multiply(4, 5, sum);

// стрелочные функции
// const sum = (a, b) => a + b;
// console.log(sum(3, 5));

// const getName = (name) => `Your name is ${name}`;

// const getNameTwo = (name) => {
//     return `Your name is ${name}`;
// };

// console.log(getName("Sergey"));
// console.log(getNameTwo("Sergey"));

// const quadro = (a) => {
//     console.log(a ** 2);
// }
// quadro(4);

// Практика
// 1
const showStringN = (str, n) => {
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
};
showStringN("Hello", 2);

// 2
const glasn = (str) => "аеёийоуъыьэюя".includes(str);
// так же можно сделать через if и лог. оператора || (или)
const glasn2 = (str) => {
    k = "аеёийоуъыьэюя";
    for (let i = 0; i < k.length; i++) {
        if (str === k[i]) {
            return true;
        }
    }
    return false;
};
console.log(glasn("а"));

// 3 Палиндром
const palindrom = (str) => {
    return str === str.split("").reverse().join("");
    // let k = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     k += str[i];
    // }
    // return str == k;
};
console.log(palindrom("ababak"));
