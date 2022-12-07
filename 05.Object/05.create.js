// 생성자 함수
function Fruit(name, emoji) {
    // 생성자 함수명은 대문자로 시작해야함!
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this; // 생성자 함수에서는 리턴이 자동으로 진행 되므로 생략이 가능함
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(orange.name);

apple.display();
orange.display();