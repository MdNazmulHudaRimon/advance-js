const numbers = [3,4,5,6,7,8,9]
const output = [];
// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

const result =  numbers.map(function(element){
    return element * element;
})
console.log(result);

const bigger = numbers.filter( x => x < 3);

const isThere = numbers.find(x => x > 5);

console.log(isThere); 
