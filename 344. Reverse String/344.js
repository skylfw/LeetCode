var reverseString = function(s) {
    const result = [];
    for(let i = s.length - 1; i > -1; i--){
        result.push(s[i])
    }
    return console.log(result);
};

reverseString(["H","a","n","n","a","h"])