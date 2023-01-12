const textObj = new String('Hello World');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// text내용 중 인덱스로 접근해서 몇 번째인지 확인.(*중복되는 글자는 앞에서부터 카운트를 해줌.)
console.log(text.indexOf('l'));
// 뒤에서 찾고 싶을 땐 lastIndexOf()사용
console.log(text.lastIndexOf('l'));

// text내용 중 찾고싶은 문자가 포함되어있는지 확인하는 방법.
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

// 특정한 문자로 시작하는지 안하는지 판별.
console.log(text.startsWith('He'));
// 특정한 문자로 끝나는지 아닌지 판별
console.log(text.endsWith('!'));

// text의 내용을 모두 대문자로 변경
console.log(text.toUpperCase());
// 소문자도 가능
console.log(text.toLowerCase());

// 문자열에서 특정한 문자열을 삭제해서 출력.
console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

// 문자열에서 공백제거
const space = '            space         ';
console.log(space.trim());

// 지정하여 문자를 끊어서 출력
const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(', ', 2));