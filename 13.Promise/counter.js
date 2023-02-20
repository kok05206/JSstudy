let count = 0;
// export default는 모듈에서 딱 하나만 export할 때 사용할 수있다.
// export default function increase() {
//     count++;
//     console.log(count);
// }

// 여러가지를 export할 때는 default가 빠진다.
export function increase() {
    count++;
    console.log(count);
}
export function getCount() {
    return count;
}