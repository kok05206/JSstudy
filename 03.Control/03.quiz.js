// 퀴즈 !
// TODO
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력.
// if 문을 활용해서 출력해보고, ternary를 사용해서 출력해봐라.

//  1. if문 활용.
let num = 2;
if (num % 2 === 0) {
    console.log('👍');
} else {
    console.log('👎');
}

//  2. ternary문 활용.
let num1 = 2;
num1 % 2 === 0 ? console.log('👍') : console.log('👎');
// or
let result = num1 % 2 === 0 ? '👍' : '👎';
console.log(result);