const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);
// 위의 코드를 for루프로 간단하게 작성.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 추가, 삭제 하는 방법 - 좋지 않은 방식.(사용하지 말아야함.)
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
fruits[4] = '🍓';
// fruits[fruits.length] = '🍓'; , 훨씬 좋은 방식
console.log(fruits);

// 삭제하는 방법
delete fruits[1];
console.log(fruits);