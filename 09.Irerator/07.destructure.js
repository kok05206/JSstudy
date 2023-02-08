/**
 * 구조 분해 할당 , Destructuring Assignment
 * 구조 분해 할당의 장점 : 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
 */

const fruits = ['🍌', '🍎', '🍇', '🍑'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [y, z, x = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
    return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const hwang = { name: 'Hwang', age: '26', job: 'web engineer' };

function display({ name, age, job }) {
    console.log('이름:', name);
    console.log('나이:', age);
    console.log('직업:', job);
}
display(hwang);

const { name, age, job: occupation, pet = '강아지' } = hwang;
console.log(age);
console.log(occupation);
console.log(pet);