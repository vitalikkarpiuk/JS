function MyIsNaN(value) {
    // Перевірка на не число
    return typeof value === 'number' && value !== value;
}

// Як використовуємо функцію:
console.log(MyIsNaN(123)); // Виведе false
console.log(MyIsNaN('hello')); // Виведе false
console.log(MyIsNaN(NaN)); // Виведе rue
console.log(MyIsNaN(undefined)); // Виведе false