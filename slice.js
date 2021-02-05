const numbers = [10,15,20,35,24,56,54];
const part = numbers.slice(2,6);
const removed = numbers.splice(2,3);
console.log(part);
console.log(removed);
console.log(numbers);

const together =  numbers.join(",");
console.log(together);