// 동등 비교 관계 연산자 (Equality Operator)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // 타입은 다르지만 문자열이 담고있는 '2'가 숫자로 변환되어서 비교가 되기 때문에 결과적으로는 true가 나옴
console.log(2 === '2'); // 그래서 타입비교까지 하기위해 ===를 사용👍👍👍👍
console.clear();
console.log(true === 1);
console.log(false === 0);
console.clear();

const obj1 = {
    name: 'js',
};

const obj2 = {
    name: 'js',
};
console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

console.clear();
let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);