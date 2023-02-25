function Cat(name) {
  this.name = name;
  // 2. arrow 함수를 사용 : arrow 함수는 만드는 순간 렉시컬 환경에서의 this 정보를 기억한다!, 즉 가지고 있다!
  // arrow함수를 만드는 순간, arrow 함수에서 this를 참조한다면, 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴!
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다: ${this.name}`);
  };
  // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
  // this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName();
}
printOnMonitor(cat.printName);
