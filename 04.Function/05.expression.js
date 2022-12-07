// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function(a, b) {
    return a + b;
};
console.log(add(1, 2));

// 화살표 함수사용
// 화살표 함수 const name = ( ) => { }
add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// 즉각적으로 호출이되는 함수 표현식
// IIFE (Immedicastely - Invoked Function Expressions)
// 실제로 많이 쓰이는건 아님. 단지 바로바로 확인을 해보고 싶을 때 사용.
(function run() {
    console.log('😛');
})();