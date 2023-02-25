// var과 let의 차이점! **let.ver
function loop() {
  const array = [];
  // var과 let의 차이점!
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

// var과 let의 차이점! ** var.ver
/**
 * var은 블럭 스코프가 없다!
 * var은 함수스코프만 가지고 있다.
 * 따라서 for문 안에서 얼마나 많은 함수를 생성하던지 공통된 i 변수만 가진다.
 * 아래 코드에선 5라는 조건이 있기에 5에만 접근한다.
 */
function loop1() {
  const array1 = [];
  // var = i;
  // var과 let의 차이점!
  for (var i = 0; i < 5; i++) {
    array1.push(function () {
      console.log(i);
    });
  }
  return array1;
}
const array1 = loop1();
array1.forEach((func1) => func1());
