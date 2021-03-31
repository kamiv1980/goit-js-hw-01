'use strict'
console.log('Задание 5')

let cost
const country = prompt('Введите название страны')
switch (country.toLowerCase()) {
  case 'китай':
    cost = 100
    break
  case 'чили':
    cost = 250
    break
  case 'австралия':
    cost = 170
    break
  case 'индия':
    cost = 80
    break
  case 'ямайка':
    cost = 120
    break
  default:
    break
}
if(cost) {
 console.log(`Доставка в ${country} будет стоить ${cost} кредитов`) 
} else { 
  alert('В вашей стране доставка не доступна')
}
