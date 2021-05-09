const twoSum = function(nums, target){
	for(let i = 0; i < nums.length; i++){
		const val = nums[i];
		
		for(let j = 0; j < nums.length; j++) {
			const otherVal = nums[j];
			
			if(i !== j && val + otherVal === target) {
				return [i,j];
			}
		}
	}
};