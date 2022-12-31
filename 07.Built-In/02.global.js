console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');

console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseFloat('11'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함.s
// 한글이나 특수문자는 이스케이프 처리를 해야 한다.
const URL = 'https://드림코딩.com';
// 인코드 하는법
const encoded = encodeURI(URL);
console.log(encoded);
// 디코드 하는법
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component를 이용!
const part = '드림코딩.com';
console.log(encodeURIComponent(part));