// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 5, 2023'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2032);
now.setMonth(9); // 0부터 시작이라 0 -> 1월 , 1 -> 2월 ...
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); // 0 -> 일요일 , 1 -> 월요일 ... 6 -> 토요일
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601형식
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));