// task 1
// let n = prompt('Enter first number: ');
// let m = prompt('Enter second number: ');
// let compare = (n, m) => {
//     if (n < m)
//         return -1;
//     else if (n > m)
//         return 1;
//     else
//         return 0;
// }
// alert(compare(n, m));

// task 2
// let fact = n => {
//     if (n == 0 || n == 1)
//         return 1;
//     return n * fact(n - 1)
// }
// console.log(fact(6))  

// task 3
// let a = prompt('Enter first number: ');
// let b = prompt('Enter second number: ');
// let c = prompt('Enter third number: ');
// function numbers(a, b, c) {
//     return parseInt(`${a}${b}${c}`);
// }
// alert(numbers(a, b,c));

// task 4
// function math(l, w) {
//     if (l == '') return w ** 2
//     if (w == '') return l ** 2
//     return l * w ;
// }
// let l = prompt('Enter the length: ');
// let w = prompt('Enter the width: ');
// alert(math(l, w));

// task 5
// let divs = 0;
// let isPerfect = number => {
//     for (let i = 1; i < number; i++) {
//         if (number % i == 0) 
//             divs += i;
//     }
//     if (divs != number)
//         return number + ' isn`t perfect';
//     else
//         return number + ' is perfect';
// }
// console.log(isPerfect(28));

// task 6
// let isPerfect = number => {
//     let divs = 0;
//     for (let i = 1; i < number; i++){
//          if (number % i == 0)
//             divs += i;
//     }
//     return divs == number;
// }
// let perfectRange = (min, max) => {
//     let divs = [];
//     let index = 0;
//     for (let i = min; i <= max; i++) {
//         if (isPerfect(i)) {
//             divs[index] = i;
//             index++;
//         }
//     }
//     return divs.join(', ');
// }
// let min = +prompt('Enter lower bound: ');
// let max = +prompt('Enter upper bound: ');
// alert(perfectRange(min, max));

// task 7
// let h = +prompt('Hours:');
// let m = +prompt('Minutes:');
// let s = +prompt('Seconds:');
// let time = (h, m, s) => {
//     h = h < 10 ? '0' + h : h
//     m = m < 10 ? '0' + m : m  
//     s = s < 10 ? '0' + s : s  
//     return `${h}:${m}:${s}`;
// }
// alert(time(h, m, s));

// task 8
// let h = +prompt('Hours:');
// let m = +prompt('Minutes:');
// let s = +prompt('Seconds:');
// let toSec = (h, m, s) =>(h * 3600) + (m * 60) + s;
// alert('Seconds: ' + toSec(h, m, s));

// task 9
// let time = s => {
//     let h = Math.round(s / 3600);
//     let m = Math.round((s % 3600) / 60);
//     s %= 60;

//     h = h < 10 ? '0' + h : h;
//     m = m < 10 ? '0' + m : m;
//     s = s < 10 ? '0' + s : s;
//     return `${h}:${m}:${s}`;
// }
// let s = +prompt('Seconds:');
// alert(time(s)); 

// task 10
// let toSec = (h, m, s) => (h * 3600) + (m * 60) + s;

// function calcDiff(h, m, s, h2, m2, s2) {
//     let date = toSec(h, m, s);
//     let date2 = toSec(h2, m2, s2);
//     let diff = date - date2;
//     let h_ = Math.round(diff / 3600);
//     let m_ = Math.round((diff % 3600) / 60);
//     let s_ = diff % 60;
//     h_ = h_ < 10 ? '0' + h_ : h_;
//     m_ = m_ < 10 ? '0' + m_ : m_;
//     s_ = s_ < 10 ? '0' + s_ : s_;
//     return `${h_}:${m_}:${s_}`;
// }
// console.log('The differance: ' + calcDiff(1, 20, 30, 1, 5, 10));

