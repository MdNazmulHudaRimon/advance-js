const nums = [5,6,7,8,9,10];
for(let i=0; i<nums.length;i++){
    console.log(nums[i]);
    if(nums[i]<6){
        break;
    }
}
const  numbers = nums.map(function(elements){
    return elements;
})
console.log(numbers);