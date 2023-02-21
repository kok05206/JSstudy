// Promise만드는법
// Promise 객체를 만들 때는 new연산자를 사용해서 만들어야 함.
// 생성자 안에는 콜백함수를 전달해줘야 함.
// 전달 성공 > resolve
// 전달 실패 > reject
// 이 두 콜백함수를 만들어서 성공과 실패의 경우에 출력해야할 코드를 작성 후 promise함수를 호출해주면 된다.

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  // .then(필요한 일을 수행 => 성공적으로 수행했을 때)
  // .catch(에러를 처리 => 실패했을 때)
  // .finally(최종적으로 무조건 호출)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));
