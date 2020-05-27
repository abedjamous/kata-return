// 1. Add 

let add = function () {
    let a = 2;
    let b = 4;
return a + b
}

// 2. Multiply

let multiply = function (num, times) {

let n = num;
 for(let i = 1; i < times; i++) {
   num += n; 
 }

 return num;
};

// 3. Power/Exponentiation

function power(x, n) {
let num = x;
for (let i = 1; i < n; i++) {
  x *= num;
}
return x
}

// 4. Factorial

function factorial(y) {
let total = 1;

for (i = 0; i < y; i++){
   total = total * (y - i);
}
return total
}

// ALL the rusult arranged:

console.log(add()); 

console.log(multiply(add(),4))

console.log(power(add(), 2));

console.log(factorial(add())); 




