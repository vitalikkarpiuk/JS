// Регулярний вираз для валідації email
const emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/;

// Масив з електронними поштами
const arr = [
    {
        userName: "Vitalii",
        lastName: "Karpiuk",
        email: "Vitalii.Karpiuk@gmail.com"
    },
    {
        userName: "Vasia",
        lastName: "Pupkin",
        email: "Vasia_pupkin@ukr.net"
    },
    {
        userName: "Vasia",
        lastName: "Pupkin",
        email: "Vasia.pupkin@gmail.net"
    },
    {
        userName: "Iryna",
        lastName: "Grusiyk",
        email: "Iryna1q1@yahoo.com"
    },
];

// Фільтрація пошт, які відповідають критеріям
const trustedEmails = arr.filter(obj => emailRegex.test(obj.email));

// Вивід результату масивом
console.log(JSON.stringify(trustedEmails, null, 2));
