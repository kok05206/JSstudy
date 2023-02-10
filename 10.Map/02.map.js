/**
 * Map - Key, Value로 이루어진 자료구조.
 * 순서는 상관없음.
 * Key는 유일해야 함.
 * Key만 다르다면 중복은 가능.
 */

const map = new Map([
    ['Key1', '🍎'],
    ['Key2', '🍏'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('Key1'));
console.log(map.has('Key6'));

// 순회
map.forEach((value, key) => console.log(value, key));
console.log(map.keys()); // Key들만 받아올 수 있고
console.log(map.values()); // Value들만 받아올 수도 있다.
console.log(map.entries()); // Key와 Value 모두 받아 올 수도 있다.

// 찾기 , get함수 사용
console.log(map.get('Key1'));
console.log(map.get('Key2'));
console.log(map.get('Key4')); // 없는 Key이기 때문에 터미널에서 undefined가 뜬다.

// 추가
map.set('Key3', '🥝');
console.log(map);

// 삭제
map.delete('Key3');
console.log(map);

// 전부 삭제
map.clear();
console.log(map);

// Map과 오브젝트와의 큰 차이점?
// 구조는 굉장히 유사하지만, Map이 오브젝트보다 사용할 수 있는 함수가 훨씬 더 많다.
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
    [key]: milk,
};
console.log(obj);

const map2 = new Map([
    [key, milk]
]);
console.log(map2);

console.log(obj[key]); // 오브젝트에서 key로 동적접근이 가능한 반면
console.log(map2[key]); // Map에서는 접근이 불가능하여 undefined가 나온다.
console.log(map2.get(key)); // 이처럼 get함수를 사용해야만 key로 접근이 가능하다.