// Symbol 심벌
// 유일한 키를 생성할 수 있음.
const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'Hello');
console.log(map.get(key2));
console.log(key1 === key2);

// 심벌 사용했을 때
// 이름은 같지만 서로 다른 값이 생성된다.
const map2 = new Map();
const key3 = Symbol('key');
const key4 = Symbol('key');
map2.set(key3, 'Hwang');
console.log(map2.get(key4));
console.log(key3 === key4);

// 동일한 이름으로 하나의 키를 사용하고 싶다면? => Symbol.for을 사용!
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// 심벌이 가지고 있는 문자열의 정보를 알기 위해서는 keyFor을 사용.
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key3));

// 오브젝트에 심벌적용.
const obj = {
    [k1]: 'Hello',
    [Symbol('key')]: 1,
};
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);