// Kullanıcı Tercihine Göre Dizi Üzerinde İşlem Yapma (for)

let numbers = []

let userInput = Number(prompt(`How many numbers do you want to enter?`))


for (let i = 0; i < userInput; i++) {
  let number = Number(prompt(`Please enter a number`))
  numbers.push(number);
}

let numberType = prompt("Which numbers would you like to see? (single / double)");

for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];

  if (numberType === "double" && currentNumber % 2 === 0) {
    console.log(currentNumber);
  }
  else if (numberType === "single" && currentNumber % 2 !== 0) {
    console.log(currentNumber);
  }
}


