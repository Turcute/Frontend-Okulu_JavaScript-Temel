// Kullanıcı Seçimine Göre Filtreleme (for of ile)

let numbers = []

let askUser = Number(prompt(`How many numbers do you want to enter?`));

for (let i = 0; i < askUser; i++) {
  let number = Number(prompt(`Please enter a number:`));
  numbers.push(number);
}

let numberType = prompt(
  `Would you like to see the positive or negative numbers?`)

for (let currentNumber of numbers) {
  if (numberType === `positive` && currentNumber > 0) {
    console.log(`Positive numbers: ${currentNumber}`);
  }
  
  else if (numberType === `negative` && currentNumber < 0) {
    console.log(`Negative numbers: ${currentNumber}`);  
  }

}  