function checkProbabilityTheory(count) {
    // Ініціалізуємо лічильники парних та непарних чисел:
    let evenCount = 0;
    let oddCount = 0;

    // Генеруємо count випадкових чисел та рахуємо кількість парних та непарних чисел:
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // Генеруємо випадкове число від 100 до 1000
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Обчислюємо відсоток парних чисел до непарних:
    const percentageEven = (evenCount / count) * 100;
    const percentageOdd = (oddCount / count) * 100;

    // Виводимо інформацію:
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${percentageEven.toFixed(2)}% : ${percentageOdd.toFixed(2)}%`);
}

// Приклад використання функції:
checkProbabilityTheory(999);
