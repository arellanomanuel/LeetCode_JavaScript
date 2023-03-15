/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const nums1=[-1,0,3,5,9,12];
const target1=9;
var search = function(nums, target) {
    let indexL=0;
    let indexR=nums.length-1;
    let mediana=Math.round((indexL+indexR)/2);
    let res=-1;
    if(target>nums[mediana]){
        indexL=mediana;
    }
    else{
        indexR=mediana;
    }
    while(indexL<=indexR){
        if(nums[indexL]==target){
            res=indexL;
        }
        indexL++;
    }
    return res;
}; 
console.log(search(nums1,target1));
