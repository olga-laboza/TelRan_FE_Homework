/* 1. Составьте программу, которая присваивает переменной d значение 7,
 а затем выводит на экран: в первой строке - это значение, 
 во второй  - квадрат этого значения, в третьей  - куб этого значения.*/

 let d = 7;
 console.log(d);
 console.log(d**2);
 console.log(d**3);

 
 /* 2. Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое. Программа должна выводить на экран новое значение. */

//  let num = Number(prompt('Enter the number'));
//  if (num > 0){
//     console.log(num * 2);
//  }
//  else 
//  console.log('Incorrect condition. Number is negative');


 /*3. Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот - выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".*/

//  let num1 = Number(prompt('Enter the first number'));
//  let num2 = Number(prompt('Enter the second number'));
//  if (num1 > num2) {
//     console.log(num1 + num2);
//  }
//  else if (num1 < num2) {
//     console.log(num1 * num2);
//  }
//  else 
//  console.log('Numbers are equal');


 /*4.  Составьте программу, которая принимает с клавиатуры целое число и выводит на экран его квадрат - но только в том случае, если введенное число отрицательно. В противном случае на экран выводится сообщение "ошибка". */

//  let num = Number(prompt('Enter the number'));
//  if (num < 0) {
//     console.log(num**2);
//  }
//  else 
//  console.log('Incorrect condition. Number is positive');


 /* 5.  Составьте программу, которая принимает с клавиатуры два числа: первое - количество учеников в классе, второе  - количество стульев в кабинете. Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию.
 ввод: 24, 28 --> вывод: стульев хватает; ввод: 24, 22 --> вывод: стульев не хватает) */

//  let num_students = Number(prompt('Enter the number of students'));
//  let num_chairs = Number(prompt('Enter the number of chairs'));

//  if (num_students > num_chairs) {
//     console.log(`enter: ${num_students}, ${num_chairs} --> There are not enough chairs`);
//  }
//  else
//  console.log(`enter: ${num_students}, ${num_chairs} --> There are enough chairs`);


 /*6. Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке. Перед началом вывода на экран следует вывести "старт", а после окончания вывода чисел - "финиш".
 вывод: старт, 1, ... 9, финиш) */

//  console.log('start');
//  for(let i = 1; i < 10; i++){
//     console.log(i);
// }
// console.log('finish');


/** 7. Составьте программу, которая выводит на экран все двузначные положительные числа, делящиеся без остатка на 5 (начиная с наименьшего).  */

// for (let i = 10; i < 100; i++ ) {
//     if(i % 5 == 0) {
//         console.log(i);
//     }
// }


/** 8. Написать цикл, который выводит те числа из массива, которые больше или равны 15. */

// let array = [10, 30, 24, 0, -5, 44, 0, -17, 15];

// console.log('Source array: ' + array); 
// console.log('Elemets >= 15: '); 

// for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 15) {
//         console.log(array[i]);
//     }
// }
 

/** 9. Написать цикл, который выводит только нечетные числа массивa */

// let array = [15, 28, 14, 9, 7, -2, 77, 0, 66];

// console.log('Source array: ' + array); 
// console.log('Odd numbers of the array:'); 

// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2 != 0) {
// console.log(array[i]);
//     }
// }


/** 10. Вывести только те значения массива, индекс которых кратен трем */

// let array = [10, 9, 15, 9, 7, 12, 78, 0, 66, -7];

// console.log('Source array: ' + array); 
// console.log('Index multiple of the tree:'); 

// for (let i = 0; i < array.length; i++) {
//     if(i % 3 == 0) {
// console.log(array[i]);
//     }
// }

