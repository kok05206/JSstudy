// 주석 Comments
// 한 줄 짜리 주석을 작성할 때 씀
// TODO(인환): 해야할 일을 작성
// TODO(인환): XX기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게(HOW)를 설명하는것이 좋음
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋음.
/**
 * 
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns  a와 b를 더한 값.
 */
function add(a, b) {
    return a + b;
}
[].map