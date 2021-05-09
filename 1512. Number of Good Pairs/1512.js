// good identical pair
// nums[i] == nums[j] && i < j
// (1,1) -> indexes at (0, 3) 
// (1,1) -> (0, 4) 
// (1,1) -> (0, 5) 
// (3,3) -> (2, 5)

var numIdenticalPairs = function(nums) {
    const map = {};
    let count = 0;
    for(const n of nums){
        if(map[n]){
            count += map[n];
            map[n]++;
        } else {
            map[n] = 1;
        }
    }
    return count;
};

numIdenticalPairs([1,2,3,1,1,3])

