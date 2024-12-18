const repeatString = function(string, number) {
    if(number < 0) {
        return "ERROR";
    }
    final = "";
    for(let i = 0; i < number; i++) {
        final += string;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
