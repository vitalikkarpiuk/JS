// Створюємо об'єкт з трьома властивостями
let car = {
    mark: "Toyota",
    model: "Camry",
    year: 2022,

    getInfo: function() {
      let info = "";
      for (let prop in this) {
        if (typeof this[prop] !== "function") {
          info += `${prop}: ${this[prop]}\n`;
        }
      }
      console.log(info);
    }
  };
  
  // Показуємо інформацію про обʼєкт
  car.getInfo();
  
  // Додаємо нову властивість
  car.newProperty = "Black";
  
  // Показуємо інформацію про обʼєкт із уже доданою новою властивістю
  car.getInfo();
