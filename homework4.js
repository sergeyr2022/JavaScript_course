// работа с if-else

// const a = 6;
// if (a === '1'){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }

// Работа с логическими переменными
// let test = true;
// if (test == false) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// console.log(test == false ? 'Верно': 'Неверно');

// Работа с && и ||
// let a = 14;
// let b = 14;
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// switch - case
// let num = 1;
// let result;
// switch (num) {
//     case 1:
//         result = 'winter'
//         break;
//     case 2:
//         result = 'spring';
//         break;
//     case 3:
//         result = 'summer';
//         break;
//     case 4:
//         result = 'fall';
//         break;
//     default:
//         console.log('error');
// }
// console.log(result);

// Общие задачи
// 1
// const day = 2;
// if (day/10<=1){
//     console.log(1);
// }else if (day/10>1 && day/10<=2) {
//     console.log(2);
// }else {
//     console.log(3);
// }

//2
// const month = 6;
// if (month==2 || month==12 || month==1) console.log('winter');
// else if (month>=3 && month<=5) console.log('spring');
// else if (month>=6 && month<=8) console.log('summer');
// else if (month>=9 && month<=11) console.log('fall');

// 3
// const a = "123";
// if (a[0] == 1 && a[1] == 2 && a[2] == 3) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// 5
// const b = "567";
// console.log(+b[0] + +b[1] + +b[2]);

// 6
// const c = "123231";
// const c1 = +c[0] + +c[1] + +c[2];
// const c2 = +c[3] + +c[4] + +c[5];
// console.log(c1 == c2 ? "yes" : "No");

// while & for
// 1
// a = 1;
// while (a<=100){
//     console.log(a);
//     a++;
// }
// for (let i = 1; i<=100; i++){
//     console.log(i);
// }

// 2
// a = 11;
// while (a<=33) {
//     console.log(a);
//     a++;
// }
// for (let i = 11; i<=33; i++) {
//     console.log(i);
// }

// 3
// a = 0;
// while (a <= 100) {
//     console.log(a);
//     a += 2;
// }
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// 4
// a = 1;
// sum = a;
// while (a < 100) {
//     a++;
//     sum += a;
// }
// console.log(sum);

// let c = 0;
// for (let i = 1; i <= 100; i++) {
//     c+=i
// }
// console.log(c);

// работа с for для массива
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// Общие задачи
// 1
// const arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 3 && arr[i] <= 10) {
//         console.log(arr[i]);
//     }
// }

// 2
// const arr = [2, 5, -9, 15, 0, -4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// 3
// const arr = [1, 2, 5, 9, 13, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         console.log("yes");
//         break;
//     }
// }

// 4
// const arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     if (String(arr[i])[0] == 1
//     || String(arr[i])[0] == 2
//     || String(arr[i])[0] == 5 ) {
//         console.log(arr[i]);
//     }
// }

// 5
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = "-";
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i] + "-";
// }
// console.log(str);

// 6
// let n = 1000;
// num = 0;
// while (n > 50) {
//     n /= 2;
//     num++;
// }
// console.log(`Число: ${n}`);
// console.log(`Количество итераций: ${num}`);
