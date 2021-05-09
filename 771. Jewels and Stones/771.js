var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(const s of stones){
        if(jewels.includes(s)){
            count++;
        }
    }
    return count;
};
