/**
 * @param {number[]} nums
 * @return {number}
 */
const ex1 = [0,0,1,1,1,2,2,3,3,4];
const ex2 = [1,1,2];
var removeDuplicates = function(nums) {
   let aux=nums[0];
   let arr=[];
   arr.push(nums[0])
   for(let i = 0; i < nums.length; i++){
       if(aux!=nums[i]){
           arr.push(nums[i]);
           aux=nums[i];
       }
       
   }
   for(let j = 0; j < arr.length; j++){
       nums[j]=arr[j];
   }
   return arr.length;
};
console.log(removeDuplicates(ex1));
console.log(removeDuplicates(ex2));