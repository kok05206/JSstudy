// Set
/**
 * 데이터의 집합체
 * 인덱스가 없음.
 * 순서도 없음.
 * 그냥 하나의 집합체.
 * 중복도 불가능함.
 */
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
    console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set); // 이렇게 중복이 되면 무시당함.

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🍈', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);