// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
    name: 'apple',
    'hello-bye': '😊',
    0: 1,
    ['hello-bye1']: '😊',
};

// 속성, 데이터에 접근하기 위해서는 console.log(객체명.key);
console.log(apple.name); // 마침표 표기법 Dot notation
console.log(apple[0]); // 대괄호 표기법 Bracket notation
console.log(apple['hello-bye1']);

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
// 같은 출력
console.log(apple['emoji']);

// 속성 삭제 (delete)
delete apple.emoji;
console.log(apple);