var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a,b) => a-b);
    return nums.map(n => sorted.indexOf(n));
};

smallerNumbersThanCurrent([8,1,2,2,3])