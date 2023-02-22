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
// async & await 사용하기
// .then보다 간결하고 비동기적인 코드를 동기적으로 즉, 절차적으로 사용할 수 있음.
// 단, Promise를 리턴하는 함수를 호출할 때는 await키워드를 사용하여 기다렸다가 resolve가 되면 그 때 변수에 할당해준다.
// 그냥 값을 리턴해준다 하더라도 async키워드가 붙혀졌기 때문에 함수의 값은 이 배열을 resolve하는 Promise가 만들어진다.
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits() //
  .then((fruits) => console.log(fruits));
