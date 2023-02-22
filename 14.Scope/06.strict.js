// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임.
/**
 * 엄격모드
 * 기존에는 조용히 무시되던 에러를 throwing합니다.
 * JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로 잡습니다.
 * 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
 * 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.
 */
'use strict';
// var x = 1;
// delete x;

function add(x) {
  var a = 2;
  var b = a + x;
  console.log(this);
}
add(1);

const array = [1, 2, 3];
for (let num of array) {
  console.log(num);
}
