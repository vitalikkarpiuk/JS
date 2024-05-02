var services = {
    "Поставити віндовс": "300 грн",
    "Поставити антивірус": "200 грн",
    "Налаштувати роутер": "100 грн",
    
    // Обчислюємо загальну вартість послуг
    price: function() {
        let totalPrice = 0;
        for (let service of Object.values(this)) {
            if (!isNaN(parseFloat(service))) {
                totalPrice += parseFloat(service);
            }
        }
        return totalPrice;
    },
  
    // Тут я знаходжу мін вартість послуг
    minPrice: function() {
        let minPrice = Infinity;
        for (let service of Object.values(this)) {
            if (!isNaN(parseFloat(service))) {
                minPrice = Math.min(minPrice, parseFloat(service));
            }
        }
        return minPrice;
    },
  
    // Тут знаходжу макс вартість послуг
    maxPrice: function() {
        let maxPrice = -Infinity;
        for (let service of Object.values(this)) {
            if (!isNaN(parseFloat(service))) {
                maxPrice = Math.max(maxPrice, parseFloat(service));
            }
        }
        return maxPrice;
    }
};
  
// Додаю нову послугу
services['Поставити VPN щоб на роботі не бачили що я роблю в робочий час'] = "400 грн";
  
// Загальна вартість послуг СТО
console.log("Загальна вартість послуг:", services.price());
  
// Найдешевша послуга
console.log("Мінімальна вартість послуги:", services.minPrice());
  
// Найдорожча послуга
console.log("Максимальна вартість послуги:", services.maxPrice());
