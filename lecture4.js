// if (true) {
//     console.log('true');
// }
// if (false) {
//     console.log('false');
// }

// конструкция if - else if -else
// const name = "Alex";
// if (name === "Ivan") {
//   console.log(`Hello, ${name}`);
// } else if (name === "Alex") {
//   console.log(`Hello, friend ${name}`);
// } else if (name === "Petr") {
//   console.log(`Hi, ${name}`);
// } else {
//   console.log("Hello, unknown");
// }

// const age = NaN;
// if (age < 18) {
//   console.log("запрещено");
// } else if (age >= 18) {
//   console.log("разрешено");
// } else {
//   console.log("укажите свой возраст");
// }

// тернарный оператор
// let i;
// let result = true ? i = 13 : i = 12;
// console.log(result);

// const userName = "Ian";
// const result = userName === "Alex" ? "Hello Aleks" : "Hello user";
// console.log(result);

// Конструкция типа switch
// const polzName = "Alex";
// switch (polzName) {
//   case "Alex":
//     console.log("Hello Alex!");
//     break;
//   case "Ivan":
//     console.log("Hello Ivan!");
//     break;
//   default:
//     console.log("Hello user!");
// }

// Практика
// Задание 1
// let a = 10;
// const b = 5;
// const c = 6;

// // 1 дополн переменная
// let a1 = a;
// if (a1 < b) {
//     a1 = b;
// }
// if (a1 < c) {
//     a1 = c;
// }
// console.log(a1);

// // 2 условный и тернарный операторы
// if (a > b) {
//     a > c ? console.log(a) : console.log(c);
// } else {
//     b > c ? console.log(b) : console.log(c);
// }

// // 3 без использ доп переменной
// if (a < b) {
//     a = b;
// }
// if (a < c) {
//     a = c;
// }
// console.log(a);

// задание 3
// const userRole = "usрпer";
// switch (userRole) {
//     case "admin":
//         console.log(`Роль пользователя: ${userRole}`);
//         console.log("Доступ к управлению системой и ролями других пользователей");
//         break;
//     case "manager":
//         console.log(`Роль пользователя: ${userRole}`);
//         console.log("Доступ к изменению информации для пользователей");
//         break;
//     case "user":
//         console.log(`Роль пользователя: ${userRole}`);
//         console.log("Доступ к просмотру информации");
//         break;
//     default:
//         console.log("Роль пользователя: Неопределено");
// }

// Логические оперраторы
// логическое или      ||
// Логическое и        &&
// Логическое не(not)  !

// const a = 1;
// const b = 4;
// const c = 3;

// if (a < b && b < c) {
//     console.log(c);
// } else if (a < b && b > c) {
//     console.log(b);
// } else if (a < c) {
//     console.log(c);
// } else {
//     console.log(a);
// }

// Задание 2
// const temp = -36;
// if (temp <= -30) {
//     console.log("Оставайтесь дома!");
// } else if (temp <= -10) {
//     console.log("Сегодня холодно");
// } else if (temp <= 5) {
//     console.log("Не холодно");
// } else if (temp <= 15) {
//     console.log("Тепло");
// } else if (temp <= 25) {
//     console.log("Очень тепло");
// } else if (temp < 35) {
//     console.log("Жарко");
// } else {
//     console.log("Пекло");
// }

// Циклы
// Цикл while
// let i = 0;
// while (i <= 10) {
//     console.log(i++);
// }

// Конструкция do ... while ...
// do {
//     // Тело цикла выполнится хотя бы один раз в зависимости от условия
// } while (condition);

// Цикл for
// for (let i = 0; i <= 3; i++){
//     console.log(i);
// }

// оператор break
// let i = 0;
// while (true) {
//     if (i < 10) {
//         i += 1;
//     } else {
//         break;
//     }
//     console.log(i);
// }

//  оператор continue
// let i = 2;
// if (i == 3) console.log("yes");
// else console.log("no");

// for (let i = 0; i <= 5; i++){
//     if (i == 1 || i == 3) continue;
//     console.log(i);
// }

// const arr = [1, 3, 4, 5, 6, 9, 12, 14, 16, 17, 18, 21, 25, 65, 37];
// let result = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 !== 0) result.push(arr[i]);
// }
// console.log(result);

// Практика
// Задача 1
// const stroka = 'заданная строка';
// const k = 6;  // сколько ее нужно вывести
// for (let i = 0; i < k; i++) {
//     console.log(stroka);
// }

// Задача 2
// const m = 6;
// let n = 63;
// let count = 0;
// while (n>m) {
//     n /= 2;
//     count ++;
// }
// console.log(count);

// Задача 3
const year = 1961;
let count = 0;
let count2 = 0;

for (let i = 2022; i >= 1800; i--) {
    if (i > year) {
        count += 1;
    }
    if (i%4===0) {
        count2 ++;
    }
}
console.log(count);
console.log(count2);
