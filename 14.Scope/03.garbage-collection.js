// 쓰레기 수집 - Garbage Collection
// 자바스크립트 엔진에서 자체적으로 제공해주는 Garbage Collector가 있다.
// 이것은 백그라운드 프로세스에서 동작한다.
// 어플리케이션이 바쁠땐 대기하다가 한가할 때 메모리를 체크해가면서 아무도 참조하지 않는 것을 발견하면 청소해주는 역할을 한다.

// 글로벌 변수는 앱이 종료될 때까지 계속 메모리에 유지됨!
const global = 1;
{
  // 블럭 내부에서만 존재하고, 블럭이 끝나면 Garbage Collector에 의해서 자동으로 소멸됨.
  const local = 1;
}

function print() {
  // 함수 내부에서도 블럭 안에서 필요한 경우에는
  // 필요한 곳에서! 블럭 안에서 변수를 선언하고 사용해야 함!
  if (true) {
    let temp = 0;
  }
}