// Quiz
const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black',
    },
};

// 1. styles키로 접근
// 2. styles안에 있는 color를 넣어주면 끝!
function changeColor({ styles: { color } }) {
    console.log(color);
    // console.log(styles); > 바로 접근은불가능.
    // 중첩된 구조분해할당에서는 styles가 객체가 아닌 참고용이기 때문.
}
changeColor(prop);