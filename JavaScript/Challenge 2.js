/* 

Given two integers (a and b), which can be positive or negative, find the sum
of all the numbers between including them too and return it. If the two numbers
are equal return a or b.

NOTE: a and b are not ordered!

Examples

getSum(1,0)  == 1  // 1 + 0 = 1
getSum(1,2)  == 3  // 1 + 2 = 3
getSum(0,1)  == 1  // 0 + 1 = 1
getSum(1,1)  == 1  // 1 Since both are same
getSum(-1,0) == -1 // -1 + 0 = -1
getSum(-1,2) == 2  // -1 + 0 + 1 + 2 = 2

*/

function getSum(a,b) {

    let numbers = [];
    let [min,max] = (a < b) ? [a,b] : [b,a];

    for (let i = min; i <= max; i++) numbers.push(i);

    return numbers.reduce((sum,item) => sum + item, 0);
}