// Визначаємо об'єкт
const users = {
    "id": "0014",
    "name": "Alice 14",
    "address": {
        "street": "1100 Main St",
        "city": "City 100"
    },
    "hobbies": [
        "Reading 14",
        "Hiking 14"
    ]
}

// Виводимо всю інформацію об'єкта
console.log(users);

// Виводимо останнє хобі
function printLastHobby(users) {
    if (users.hobbies && users.hobbies.length > 0) {
        console.log("Last Hobby:", users.hobbies[users.hobbies.length - 1]);
    } else {
        console.log("No hobbies found.");
    }
}

// Виводимо адресу в форматованому вигляді
console.log(`Address: ${users.address.city}, ${users.address.street}`);

// Викликаємо функцію для виведення останнього хобі
printLastHobby(users);