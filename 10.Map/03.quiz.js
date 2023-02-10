// Q1. 주어진 배열에서 중복을 제거 하라.
// My solution
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
const fruit = new Set(fruits);
console.log(fruit);
//['🍌', '🍎', '🍇', '🍑']

// ellie's solution
//const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
// 1. console.log(new Set(fruits));
// 2. console.log([...new Set(fruits)]);
// 3. function removeDuplication(array) {
//     return [...new Set(array)];
// }
// console.log(removeDuplication(fruits));

// Q2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라.
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// My solution
const set3 = new Set();
set1.forEach((value) => {
    if (set2.has(value)) {
        set3.add(value);
    }
});
console.log(set3);

// ellie's solution
// ver.1
// function findIntersection(set1, set1) {
//     const array = [...set1].filter((item) => set2.has(item));
//     return new Set(array);
// }
// console.log(findIntersection(set1, set2));

// ver.2
// function findIntersection(set1, set1) {
//     return new Set([...set1].filter((item) => set2.has(item)));
// }
// console.log(findIntersection(set1, set2));