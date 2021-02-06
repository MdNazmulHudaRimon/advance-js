function doSomeThing(){
    console.log(3333);
}
console.log(2222);
setTimeout(doSomeThing,10000);
console.log(4444);
setTimeout(function(){
    console.log('lazy & waiting');
},4000);