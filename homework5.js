// 1
// function sqrt (a) {
//     return a**2;
// }
// const sqrt = (a) => a**2
// console.log(sqrt(10));

// 2
// const sum = (a, b)=> a + b;
// console.log(sum(2, 3));

// 3
function sumDevide(a, b, c) {
    return (a - b) / c;
}
console.log(3, sumDevide(10, 2, 4));

// 4
function getDay(n) {
    day = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
    ];
    return day[n - 1];
}
console.log(4, getDay(7));

// 5
function equel(a, b) {
    return a === b;
}
console.log(5, equel(3, 3));

// 6
function sumTen(a, b) {
    return a + b > 10;
}
console.log(6, sumTen(4, 10));

//7
const isNegativeNumber = (a) => a < 0;
console.log(7, isNegativeNumber(9));

// 8
function isNumberIsRange(a) {
    return a > 0 && a < 10;
}
console.log(8, isNumberIsRange(12));

// 9
const mass1 = [-2, 9, 18, 5, 4, -8, 45, 8, 3, 5];
let finalArr = [];
function checkMass(arr, endMass) {
    for (let i = 0; i < arr.length; i++) {
        if (isNumberIsRange(arr[i])) {
            endMass.push(arr[i]);
        }
    }
    return endMass;
}
checkMass(mass1, finalArr);
console.log(9, finalArr);

// 10
function getDigitsSum(num) {
    str = String(num);
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += Number(str[i]);
    }
    return result;
}
const val10 = 123;
console.log(10, getDigitsSum(val10));

// 11
const findYear = () => {
    const result = [];
    for (let i = 1; i <= 2020; i++) {
        if (getDigitsSum(i) === 13) {
            result.push(i);
        }
    }
    return result;
};
console.log(findYear());

// 12 even - четный
const isEven = (num) => num % 2 == 0;
console.log(12, isEven(8));

// 13
const filterArr = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(13, filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 14
function getDivisors(n) {
    let arr1 = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) arr1.push(i);
    }
    return arr1;
}
console.log(14, getDivisors(20));

// 15
const getNumberSum = (num) => {
    if (getDigitsSum(num) > 9) {  //  getDigitsSum создали ранее
        return getNumberSum(getDigitsSum(num));
    }
    return getDigitsSum(num);
};
console.log(15, getNumberSum(156));

// 16
const strelfunc = (str) => {
    let k = "";
    for (let i = str.length - 1; i >= 0; i--) {
        k += str[i];
    }
    return str === k;
};

console.log(16, strelfunc("aboba"));
