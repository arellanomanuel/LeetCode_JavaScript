/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split("");
    var stack = [];
    for (var z of s) {
        if (z === "(" || z === "{" || z === "[") {
            stack.push(z);
            console.log("---Push---");
            console.log(stack);
        } else {
            var top = stack[stack.length - 1];
            if (z === ")" && top === "(" || z === "]" && top === "[" || z === "}" && top === "{"){
                console.log("---Pop---");
                stack.pop();
                console.log(stack);   
            }
            else
                return false;
        }
    }
    return stack.length === 0;
};
console.log(isValid("()[]{}"));
console.log(isValid("({[]})"));
