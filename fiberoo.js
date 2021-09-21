function fib(){
    const size = 50;
    const nums = [];
    const final = [];
    nums[0] = 0;
    nums[1] = 1;
    for(let i = 2; i < size; i++) {
      nums[i] = nums[nums.length - 1] + nums[nums.length - 2];
      final.push(nums[i]);
    }
    return nums;
}

console.log(fib())


function numsToStrings(array){
  return _.map(array, function(e){return e.toString()});
}

console.log(numsToStrings(fib()));

function numEvenNums(array){
    let even = 0;
    let i = 0;
    while(i < array.length){
        if(array[i] % 2 === 0) {
          even++;
        }
    }
    return even;
}

console.log(numEvenNums(fib()));