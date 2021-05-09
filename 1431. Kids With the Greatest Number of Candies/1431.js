var kidsWithCandies = function(candies, extraCandies) {
    let greatest = Math.max(...candies)
    let array = [];
    for(let n of candies){
        if(n + extraCandies >= greatest){
            array.push(true);
        } else {
            array.push(false);
        }
    }
    return array;
};

kidsWithCandies([2,3,5,1,3], 3)
