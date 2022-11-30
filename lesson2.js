// console.log(typeof('ivan'/4));
// let d = 'ivan'/4;
// console.log(d);
// const obj = {
//   foo: "bar"
// };
// console.log(typeof(obj.foo));
// Преобразование типов
// console.log(typeof Number('fgh'));
// const name = 'alex';
// const nameToNumber = Number(name);
// console.log(nameToNumber);

// const age = 26;
// const ageToString = String(age);
// console.log(typeof ageToString);

// const nullValue = null;
// console.log(Number(nullValue));

// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean({}));

// console.log(5 + (+'9'));
// console.log(2==3);
// console.log(3==3);
// console.log(3!=3);
// console.log(2<3);
// console.log(2>=3);

// console.log(2 + 2 + "3");
// console.log("2" + 2 + 3);
// console.log("2" + "3");
// console.log(2 + 3);

// console.log(5>4); // true
// console.log('ананас'>'яблоко'); //false
// console.log('2'>'12');//true
// console.log(undefined==null);//true
// console.log(undefined === null); //false
// console.log(null == "\n0\n");//false
// console.log(null === +"\n0\n");//false
// console.log("" + 1 + 0);//10
// console.log("" - 1 + 0);//-1
// console.log(true + false);// 1
// console.log(6 / "3");//2
// console.log("2" * "3");//6
// console.log(4 + 5 + "px");//9px
// console.log("$" + 4 + 5);//$45
// console.log("4" - 2);//2
// console.log("4px" - 2);//nan
// console.log(7 / 0);//infinity
// console.log("  -9  " + 5);//'  -9  5'
// console.log("  -9  " - 5);//-14
// console.log(null + 1);//1
// console.log(undefined + 1);//nan
// console.log(" \t \n" - 2);//2

// console.log("кот" > "код" );
// console.log("2" + 2 * "2" );
// console.log(undefined == null );
// console.log(undefined != null );
// console.log(null == 0 );
// console.log(2 > "3" );
// console.log(null - false + true );

// console.log(1 / "l");
// console.log("2" * "3" );
// console.log(4 + 5 + "O" );
// console.log("l" + 4 + 5 );
// console.log("4" - 2 );
// console.log("4" - "4x" );
// // console.log(“23” == 23);
// console.log(null == false );

// console.log(" -4 "/ 0 + 1 );
// console.log(null == null );
// console.log(undefined + null);
// console.log(1 === '1');
// console.log('2' > 01);
// console.log(NaN == undefined);

const towns = ['Moskow', 'Paris', 'London', 'NN'];
// const arrr = new Array(); // создание массива
// массив - структура данных
// массив - частный случай объекта
// console.log(typeof{}); // object
// console.log(typeof[]); // object
// метод в глобальном объекте Array для проверки что это массив
// console.log(Array.isArray(towns));
// console.log(towns);
towns[1] = 'Milan';
// console.log(towns);

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[1].length);
// towns.push('St. Peretburg');
// towns.unshift('Berlin');
// console.log(towns);
// towns.pop();
// towns.shift();
// console.log(towns);
const favoriteMovies = [
    'final destination',
    'avatar',
    'barbarian',
    'it'
];
console.log(favoriteMovies[0]);
favoriteMovies.push('wednesday')
console.log(favoriteMovies[favoriteMovies.length-1]);
