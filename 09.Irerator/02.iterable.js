/**
 * 강의 내용 : Iteration Protocol을 따르는 객체를 사용하는 관점에서 어떻게 사용할 수 있는지에 대해 배움.
 * Iterable 하다? -> 순회가 가능하다!
 * [Symbol.iterator](): Iterator;
 * 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다?
 * 순회가 가능한 객체구나!
 * 순회가 가능하면 무엇을 할 수 있나? for...of, spread
 */
const array = [1, 2, 3];
for (const item of array.entries()) {
    console.log(item);
}

/**
 * 프로토콜을 따라가지 않는 일반 객체에서는
 * for..of 연산자 대신 for..in 연산자를 사용한다.
 * for...in 연산자를 사용하면 obj안에 있는 key를 출력한다.
 */
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
    // print key
    console.log(item);
}

const iterator = array.values();
// for (const item of iterator) {
//     console.log(item);
// }
console.log(iterator.next().value);
while (true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}
/**
 * 위의 코드 출력시 출력코드: value: 1, done: false
 * value : 값.
 * done : 반복이 끝났는지 판별
 * true : 반복이 끝났음.
 * false : 반복이 끝나지 않았음.
 */