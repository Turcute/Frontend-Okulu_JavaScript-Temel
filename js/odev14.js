// Kullanıcı Girdileriyle Akıllı Döngü ve Filtreleme Sistemi (Bölüm sonu canavarı)

let numbers = [];

let userNumber = Number(prompt("How many numbers do you want to enter?"));

for (let i = 0; i < userNumber; i++) {
  let input = Number(prompt("Enter a number:"));

  if (input < 0) {
    break;
  }

  if (input === 0) {
    continue;
  }
  
  else
  numbers.push(input);
}

let total = 0;
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];

  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}


console.log(`Total: ${total} Odd count: ${oddCount} Even count: ${evenCount}`);
