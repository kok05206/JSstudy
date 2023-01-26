// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replace(array, from, to) {
    return array.map((item) => (item === from ? to : item));
}
const array = ['🍌', '🍓', '🍇', '🍓'];
console.log('input : ', array);
const result = replace(array, '🍓', '🥝');
console.log('output :', result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function fruit(array, item) {
    return array.filter((value) => value === item).length;
    // return array.reduce((fruit, value) => {
    //     if (value === item) {
    //         fruit++;
    //     }
    //     return fruit;
    // }, 0);
}
console.log(fruit(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(array1, array2) {
    return array1.filter((item) => array2.includes(item));
    // const result = [];
    // for (let i = 0; i < array1.length; i++) {
    //     if (array.includes(array1[i])) {
    //         result.push(array1[i]);
    //     }
    // }
    // return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// 퀴즈 4
// 5초과(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result2 = nums //
    .filter((num) => num > 5) // 5보다 큰 숫자 추출 [16, 25, 34, 21];
    .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2);