// JSON : JavaScript Object Notation
// 서버와 클라이언트(서버 = 브라우저, 클라이언트 = 모바일) 간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷
// stromgify(object) : JSON
// parse(JSON) : object

const hwang = {
  name: 'hwang',
  age: 26,
  eat: () => {
    console.log('eat');
  },
};

// 객체를 문자열로 변환 => '직렬화(Serializing)'
const json = JSON.stringify(hwang);
console.log(hwang);
console.log(json);

// 문자열데이터를 자바스크립트 객체로 변환 => '역 직렬화(Deserializing)'
const obj = JSON.parse(json);
console.log(obj);
