// Функція для додавання символів до початку рядка
function padStart(str, symbol, length) {
    // Перевірка, чи рядок вже має достатню довжину
    if (str.length >= length) {
        return str;
    }
    const padding = symbol.repeat(length - str.length);
    return padding + str;
}
// Функція для додавання символів до кінця рядка
function padEnd(str, symbol, length) {
    // Перевірка, чи рядок вже має достатню довжину
    if (str.length >= length) {
        return str;
    }
    const padding = symbol.repeat(length - str.length);
    return str + padding;
}
// Функція pad, яка додає символи або в початок, або в кінець рядка залежно від параметру isStart
function pad(str, symbol, length, isStart) {
    if (str.length >= length) {
        return str;
    }
    const padding = symbol.repeat(length - str.length);
    return isStart ? padding + str : str + padding;
}
// Приклади використання функцій
console.log(padStart('testText', '+', 10)); // Виводиться результат: '++testText'
console.log(padEnd('testText', '+', 10)); // Виводиться результат:  'testText++'
console.log(pad('testText', '+', 10, true)); // Виводиться результат:  '++testText'
console.log(pad('testText', '+', 10, false)); // Виводиться результат:  'testText++'
