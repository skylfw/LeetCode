var maximumWealth = function(accounts) {
    let sum = 0;
    let result = [];
    for(let n of accounts){
        sum = n.reduce((a,b) => a+b);
        result.push(sum);
    }
    return console.log(Math.max(...result));
};

maximumWealth([[1,2,3],[3,2,1]]);
