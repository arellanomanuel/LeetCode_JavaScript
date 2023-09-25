import java.util.HashMap; // import the HashMap class
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> target_diff = new HashMap<Integer, Integer>();
        int[] res=new int[2];

        for(int i=0;i<nums.length;i++){
            if(target_diff.containsKey(nums[i])){
                res[0]=target_diff.get(nums[i]);
                res[1]=i;
            }
            target_diff.put(target-nums[i],i);
        }
        return res;
    }
}
