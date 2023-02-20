function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}
execute();

// 자바스크립트 자체는 동기적으로 수행되지만
// Web API를 통해서 비동기적으로 코드를 수행하는 것도 있다.
// Web API 종류 몇가지.
/**
 * 1. DOM API
 * 2. setTimeout
 * 3. setInterval
 * 4. fetch
 * 5. event listener
 */
