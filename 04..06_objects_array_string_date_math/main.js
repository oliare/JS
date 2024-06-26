// ---------- task 1 ----------
// let car = {
//     manufacture: 'US',
//     model: 'Challenger',
//     year: 1970,
//     avgSpeed: 80
// }
// function print(obj){
//     for(key in obj)    
//         console.log(`${key}: ${obj[key]}`);
// }
// print(car);

// function calcTime(distance) {
//     let tmp = distance / car.avgSpeed;
//     let breaks = Math.floor(tmp / 4);
//     return tmp + breaks; 
// }
// console.log('Required time: ' + calcTime(600) + ' hours');


// ---------- task 2 ----------
// function reduction(num, denom) {
//     let commonDiv = (a, b) => {
//         return b == 0 ? a : commonDiv(b, a % b);
//     };
//     let x = commonDiv(num, denom);
//     return `${num / x}/${denom / x}`;
// }

// let fraction = {
//     first: {
//         numerator: 0,
//         denominator: 0
//     },
//     second: {
//         numerator: 0,
//         denominator: 0
//     },
//     setNumbers: function(n, d, n_, d_) {
//         this.first.numerator = n;
//         this.first.denominator = d;
//         this.second.numerator = n_;
//         this.second.denominator = d_;
//     },
//     multiply: function() {
//         let num = this.first.numerator * this.second.numerator;
//         let denom = this.first.denominator * this.second.denominator;
//         return reduction(num, denom);
//     },
//     add: function() {
//         let num = this.first.numerator * this.second.denominator + this.second.numerator * this.first.denominator;
//         let denom = this.first.denominator * this.second.denominator;
//         return reduction(num, denom);
//     },
//     subtract: function() {
//         let num = this.first.numerator * this.second.denominator - this.second.numerator * this.first.denominator;
//         let denom = this.first.denominator * this.second.denominator;
//         return reduction(num, denom);
//     },
//     divide: function() {
//         let num = this.first.numerator * this.second.denominator;
//         let denom = this.first.denominator * this.second.numerator;
//         return reduction(num, denom);
//     }
// };

// fraction.setNumbers(2, 5, 5, 10);

// console.log("Addition:", fraction.add());
// console.log("Subtraction:", fraction.subtract());
// console.log("Multiplication:", fraction.multiply());
// console.log("Division:", fraction.divide());


// ---------- task 3 ----------
let time = {
    hour: 0,
    min: 0,
    sec: 0,
    
    print(){
        alert(this.toString());
    },

    addSec(sec) {
        this.sec += sec;
        this.validateTime();
    },
    
    addMin(min) {
        this.min += min;
        this.validateTime();
    },
    
    addHour(h) {
        this.hour += h;
        this.validateTime();
    },
    
    formatting(value) {
        return value < 10 ? '0' + value : value;
    },

    validateTime() {
        while (this.sec >= 60) {
            this.sec -= 60;
            this.min += 1;
        }
        while (this.min >= 60) {
            this.min -= 60;
            this.hour += 1;
        }
        while (this.hour >= 24) {
            this.hour -= 24;
        }
    },
        
    toString() {
        return this.formatting(this.hour) + ":" + this.formatting(this.min) + ":" + this.formatting(this.sec);
    },

};

time.hour = +prompt('Hours:');
time.min = +prompt('Minutes:');
time.sec = +prompt('Seconds:');
time.validateTime();

time.print();

time.addHour(1);  
time.print();
time.addMin(20); 
time.print();  
time.addSec(45);  
time.print(); 
