const circle = require('./circle');

const r = 3;

const circumference = circle.circumference(r);
const area = circle.area(r);

console.log("The circumference of a circle of radius " + r + " is " + circumference);
console.log("Its area is " + area);