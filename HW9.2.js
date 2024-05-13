function findValueByKey(companyName, company) {
    // Перевірка, чи компанія не є null або undefined
    if (!company) {
        return null;
    }

    // Перевірка, чи назва поточної компанії співпадає з назвою, яку ми шукаємо
    if (company.name === companyName) {
        return company;
    }
    
    // Перевірка, чи у поточної компанії є клієнти
    if (company.clients && company.clients.length > 0) {
        // Ітерація по кожному клієнту
        for (let client of company.clients) {
            // Рекурсивний виклик функції для кожного клієнта
            const result = findValueByKey(companyName, client);
            // Якщо результат не пустий, повертаємо його
            if (result) {
                return result;
            }
        }
    }
    
    // Повертаємо null, якщо компанія не знайдена
    return null;
}

// Приклад використання:
const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'ITbrat',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        },
        {
            name: 'Shara',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

// Шукаємо інформацію про компанію за її назвою
const result = findValueByKey('ITbrat', company);
console.log(result);
