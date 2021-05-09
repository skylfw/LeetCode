var restoreString = function(s, indices) {
	let string = s.split('')
    for(let i in indices){
    	string[indices[i]] = s[i] 
    }
    return string.join('');
};