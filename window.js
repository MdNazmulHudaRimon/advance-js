const name = 'kuddus';
function add(num1,num2){
    const result = num1 + num2;
    console.log('result inside', result)
    console.log('name inside',name);
    return result;
}
console.log('name outside',name);
const sum = add(5,6);
console.log("result outside",sum);
