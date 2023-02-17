function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}
const result = c();
console.log(result);

// Call Stack의 단점
// 순차적으로 실행되기 때문에 무거운 수행을 하게되면 시간이 오래걸린다.
// ex
// function a(){
//     for(let i = 0; i < 1000000000; i++);
//     return 1;
// }

// function b(){
//     return a() + 1;
// }

// function c(){
//     return b() + 1;
// }
// console.log('시작했다!');
// const result1 = c();
// console.log(result1);
