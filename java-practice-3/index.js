let name = "Hasnain";
let age = 25;
let isStudent = true;
let height = 1234987623456344444444444444443333333333567n;
let weight = null;
let address;
let id = Symbol("id");

console.log('value', name, 'type', typeof name);
console.log('value', age, 'type', typeof age);
console.log('value', isStudent, 'type', typeof isStudent);
console.log('value', height, 'type', typeof height);
console.log('value', weight, 'type', typeof weight);
console.log('value', address, 'type', typeof address);
console.log('value', id.toString(), 'type', typeof id);

console.log('-----------------second Topic ------------');
let num1 = 10;
let num2 = 3;
console.log('num1:', num1, 'num2:', num2);
console.log("javascript copies the value, not the variable itself");

console.log('---------------------------Third Topic -----------------------');

let nam =  prompt('Enter your name:');
let ag = prompt('Enter your age:');
ag = Number(ag);
let isStu = confirm('Are you a student?');
let favorite = prompt('Enter your favorite number:');
favorite = Number(favorite);
let nickname = prompt('Enetr your nickname:');

console.log('Name', nam, 'type', typeof nam);
console.log('Age', ag, 'type', typeof ag);
console.log('Is Student', isStu, 'type', typeof isStu);
console.log('favorite number', favorite, 'type', typeof favorite);
console.log('nickname', nickname, 'type', typeof nickname);


