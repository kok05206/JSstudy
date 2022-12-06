let fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎');
} else {
    console.log('😊');
}

// 방법 1
fruit === 'apple' ? console.log('🍎') : console.log('😊');

// 방법 2
let emoji = fruit === 'apple' ? '🍎' : '😊';
console.log(emoji);