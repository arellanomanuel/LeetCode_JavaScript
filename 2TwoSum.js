/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let array = [];
    let sol_found=false;
    for(let i=0;i<nums.length && !sol_found;i++){
        tar_aux=target-nums[i];
        console.log("itera");
        for(let j=i+1;j<nums.length && !sol_found;j++){
            if(tar_aux==nums[j]){
                console.log(nums[i]);
                console.log(nums[j]);
                console.log(i);
                console.log(j);
                array.push(i);
                array.push(j); 
                sol_found=true;
            }
        }
    }
    return array;
}
console.log(twoSum([2,7,11,15],9));
