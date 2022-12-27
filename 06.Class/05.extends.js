// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!!');
//     }
//     sleep() {
//         console.log('잔다!!');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!!');
//     }
//     sleep() {
//         console.log('잔다');
//     }
//     play() {
//         console.log('놀자~');
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자!!');
    }
    sleep() {
        console.log('잔다!!');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color); // super = 상속하고 있는 부모클래스를 가르킴
        this.ownerName = ownerName;
    }
    play() {
            console.log('놀자~');
        }
        // 자식 클래스에서 부모클래스에 있던걸 덮어 씌운다 -> 오버라이딩 Overriding
    eat() {
        super.eat();
        console.log('강아지가 먹는다!');
    }
}
const dog = new Dog('빨강이', '인환');
console.log(dog);
dog.sleep();
dog.play();
dog.eat();