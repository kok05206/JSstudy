function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
// 기본 코드
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => {
        return [banana, apple];
      })
  )
  .then(console.log);

// 생략 코드
// getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => [banana, apple])
//   )
//   .then(console.log);

// Promise.all : 병렬저긍로 한 번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

// Promise.race : 주어진 Promise중에 가장 빨리 수행되는것이 이김.(즉, 먼저 출력!)
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

// 성공했을 때만 정보를 가져오고싶을 때.
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

// 에러인지 성공인지 모두 확인하고 싶을 때 , *성공인지 실패인지 배열로 출력하여 나타내준다.
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settled', fruits))
  .catch(console.log);
