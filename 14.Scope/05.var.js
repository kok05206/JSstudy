// var의 안좋은 특징 (1 ~ 3)
// var의 안좋은 특징 (4번 그나마 다행)
/**
 * 일반 코딩방식과 어긋나서 개발하면서도 멘붕이 온다.
 * 코드의 가독성과 유지보수성에 좋지 않다.
 */

// 1. 변수를 선언하는 키워드 없이도 선언 & 할당이 가능하다.
// 선언인지, 재할당인지 구분하기 어렵다.
somthing = '💩';
console.log(somthing);

// 2. 중복 선언이 가능하다.
var poo = '💩';
var poo = '💩';
console.log(poo);

// 3. 블록 레벨 스코프 안됨❌
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

// 4. 함수 레벨 스코프만 지원 됨(그나마 다행)
function example() {
  var dog = '🦮';
}
console.log(dog);
