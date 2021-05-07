



function twoSum(nums, target){
    let hash = {};
      for(let i = 0; i < nums.length; i++){
        let val = nums[i];
        let needVal = target - val;
          // Check if the needed value is in the hash table if not add key as val 
          // to the hash and index as value to the key
          // If needed value found in has as key return the value of the key (index)
          // and current index
      if(hash.hasOwnProperty(needVal)){
        return [hash[needVal], i]
      } else {
        console.log(hash[val] = i);
      }
    }
  }