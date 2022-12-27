// 접근제어자 - 캡슐화
// private(#), public(), protected
class Fruit {
    _name;
    _emoji;
    _type = '과일';
    // 생성자: new 키워드로 객체를 생성할 떄 호출되는 함수
    constructor(name, emoji) {
        this._name = name;
    }
    display = () => {
        console.log(`${this._name}: ${this._emoji}`);
    };
}
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
apple.name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);