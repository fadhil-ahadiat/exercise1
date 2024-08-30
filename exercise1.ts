// exercise 1


/* 1. write a code to find area of rectangle

solution:
length = 5;
width = 3;
formula = length * width;
*/

let _length: number = 5;
let _width: number = 3;

const _triangleArea: number = _length * _width;
console.log(_triangleArea);


/* 2. write a code to find perimeter of rectangle

solution:
length = 5;
width = 3;
formula = (length * 2) + (width * 2);
*/

let _length2: number = 5;
let _width2: number = 3;

const _trianglePerimeter: number = ((_length2 * 2) + (_width2 * 2));
console.log(_trianglePerimeter);


/* 3. write a code to find diameter, circumference, and area of a circle

solution:
radius = 5;
pi = 3.14 / Math.PI;
diameter formula = PI * r * 2;
circumference formula = 2 * PI * r;
area formula = PI * r square;
*/

let _radius: number = 5;
let _pi: number = Math.PI;
console.log(_pi);

// circle diameter
const _diameter: number = (_radius * 2);
console.log(_diameter);

// circle circumference
const  _circleCircumference: number = (2 * _pi * _radius);
console.log(_circleCircumference);

// circle area
const _circleArea: number = (_pi * (_radius * _radius));
console.log(_circleArea);


/* 4. write a code to find angles of triangles if two angles are given

solution:
angle a = 80;
angle b = 65;
angles formula = a + b + c = 180;
*/

let _angleA: number = 80;
let _angleB: number = 65;
let _allAngle: number = 180;

const _missingAngle: number = (_allAngle - _angleA - _angleB);
console.log(_missingAngle);


/* 5. write a code to convert days to years, months, and days

1 year = 365 days;
1 month = 30 days;
# find 400 days;
# find 366 days;
*/

// task 1
let _aYear: number = 365;
let _aMonth: number = 30;
let _task1: number = 400;

let _year: number = Math.floor(_task1 / _aYear);
let _remainingDays: number = _task1 % _aYear;
let _month: number  = Math.floor(_remainingDays / _aMonth);
let _day: number = _remainingDays % _aMonth;

console.log(`${_task1} days equal ${_year} year, ${_month} month, and ${_day} days.`);

// task 2
let _task2: number = 366;

_year = Math.floor(_task2 / _aYear);
_remainingDays = _task2 % _aYear;
_month =  Math.floor(_remainingDays / _aMonth);
_day = _remainingDays % _aMonth;
console.log(`${_task2} days equal ${_year} year, ${_month} month, and ${_day} day.`)


/* 6. write a code to get difference between dates in days

solution:
date 1 = 2022-01-20;
date 2 = 2022-01-22;
*/

let _date1: Date = new Date("2022-01-20");
let _date2: Date = new Date("2022-01-22");

let _dateDifferenceinDays: number = _date2.getDay() - _date1.getDay();
console.log(_dateDifferenceinDays); // in number
console.log(`the difference is ${_dateDifferenceinDays} days`) // in string