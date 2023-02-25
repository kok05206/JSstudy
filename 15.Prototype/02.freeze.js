// 동결! Object.freeze
// 동결된 객체는 새로운 프로퍼티 추가 & 삭제 & 쓰기 & 속성 재정의 ❌
// 단, 얕은 꽁꽁 얼림은 가능하다.
// 특정한 객체를 꽁꽁 얼려도, 특정한 객체가 다른 객체를 참조하고 있다면 참조하고 있는 객체는 꽁꽁 얼려지지 않는다!
const hwang = { name: '인환' };
const dog = { name: '와우', emoji: '🐶', owner: hwang };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
hwang.name = '인환이얌';
console.log(dog);

// 밀봉! Object.seal
// 값의 수정은 가능하나 key 추가 & 삭제 & 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '야옹';
console.log(cat);
delete cat.emoji;

// 동결되었는지 확인
console.log(Object.isFrozen(dog));
// 밀봉되었는지 확인
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions
// 추가만 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);

// 나이를 추가해도 반영되지 않음..
tiger.age = 1;
console.log(tiger);
