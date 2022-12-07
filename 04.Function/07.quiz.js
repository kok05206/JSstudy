// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수생해야 함
// 5, 순회하면서 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음.
// function iterate(max, action)

function iterate(max, action) {
    for (let i = 0; i < max; i++) {
        action(i);
    }
}

// 방법 1.
function log(num) {
    console.log(num);
}

function doubleAndlog(num) {
    console.log(num * 2);
}

// 방법 2.
// const print = (max) => console.log(max);
// const print_double = (max) => console.log(max * 2);

iterate(3, log);
iterate(3, doubleAndlog);

// setTimeout(() => {
//     console.log('2초뒤 이 함수가 실행될거에요');
// }, 2000);