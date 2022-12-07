const x = 0;
const y = 0;
//const coordinate = { x: x, y: y };
// 위의 코드 축약버전
const coordinate = { x, y };
console.log(coordinate);

function makeObj(name, age) {
    return {
        name,
        age,
    };
}
console.log(makeObj('인환', 25));