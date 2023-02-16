// export default는 모듈에서 딱 하나만 export할 때
// import increase from './counter.js';
// increase();
// increase();
// increase();
// console.log(count);
// console.log(count);
// count = -10;
// console.log(count);

// 여러가지를 export할 때
// 이름을 변경하고 싶다면 as를 쓰고 바꾸고 싶은 이름으로 변경.
// import { increase as increase1 } from './counter.js';

// 하나하나 가져올 때
// import { increase, getCount } from './counter.js';

// 그룹으로 묶어서 가져올 때
import * as counter from './counter.js';
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());