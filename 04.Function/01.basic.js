// 사용예제 1
function sum(a, b) {
    console.log('function');
    return a + b;
}
const result = sum(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
    return `${lastName}${firstName}`;
}

let lastName = '황';
let firstName = '인환';
console.log(fullName(firstName, lastName));

let lastName2 = '김';
let firstName2 = '지수';
console.log(fullName(firstName2, lastName2));