
var calculatev0 = function(s) {
    if (!s) return 0;
    const stack = [];
    let num = 0, sign = '+';
    for (let i = 0; i < s.length; i++){
        // is a number
        if (!isNaN(s[i]) && s[i] !== ' ') {
            num = num * 10 + parseInt(s[i]);
        }
        //Either this is not a number nor a space
        //OR this is at the end.
        if (isNaN(s[i]) && s[i] !== ' ' || i === s.length - 1) {
            if (sign === '+') stack.push(num);
            else if (sign === '-') stack.push(-num);
            else if (sign === '*') stack.push(stack.pop() * num);
            else { //sign is div
                const a = parseInt(stack.pop());
                const result = Math.trunc(a / num);
                stack.push(result);
            }
            sign = s[i];
            num = 0;
        }
    }
    return stack.reduce((a,b) => a + b);    
};


var calculatev1 = function(s) {
    if (!s) return 0;
    const stack = [];
    let num = 0, sign = '+';
    for (let i = 0; i <= s.length; i++){
        if (s[i] === ' ') continue;
        // is a number
        if (!isNaN(s[i])) {
            num = num * 10 + parseInt(s[i]);
        }
        //Either this is not a number nor a space
        //OR this is at the end.
        else if (isNaN(s[i]) || i === s.length - 1) {
            if (sign === '+') stack.push(num);
            else if (sign === '-') stack.push(-num);
            else if (sign === '*') stack.push(stack.pop() * num);
            else { //sign is div
                const a = parseInt(stack.pop());
                const result = Math.trunc(a / num);
                stack.push(result);
            }
            sign = s[i];
            num = 0;
        }
    }
    return stack.reduce((a,b) => a + b);    
};



/* easier to read */
var calculatev2 = function(s) {
    
    if (s.length === 0) {
        return 0;
    }
    
    // The first operator will always be implicitly '+'
    // since "string contains only non-negative integers".
    let op = '+';
        
    // this is kind of an "addition stack". the numbers in this stack
    // is sum'ed in the end. 
    let stack = [];
    
    // n is the current digit. loop 1 more time than
    // the length of the string ('<='), to push the last digit
    // to the stack
    for (let i=0, n=0; i <= s.length; ++i) {
        let c = s.charAt(i);
        
        // always skipp white space
        if(c===' ') continue;
        
        // aggregate the digits between each operator
        // into 'n'. 
        if(c >= '0' && c <= '9') {
            n = n * 10 + parseInt(c);
            continue;
        } 
        
        // we have now reached a non-digit character (an operator),
        // time to handle 'n', depending on the last seen operator. 
        if (op === '+') {
            stack.push(n);
        } else if (op === '-') {
            stack.push(-n)
        } else if (op === '*') {
            stack.push(stack.pop() * n);
        } else if (op === '/') {
            stack.push(Math.trunc(stack.pop() / n));
        }
        
        // c must be and operator, so store it for the next number.
        op = c;
        n = 0;
    }
    // return the sum of the stack.
    return stack.reduce((a, b) => a + b);
    
};
