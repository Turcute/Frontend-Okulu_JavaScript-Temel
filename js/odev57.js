// Kullanıcıdan Alınan Sayıları Ayırma ve Küçükten Büyüğe Sıralama

const processNumbers = () => {

  let numbers = [];
  let evens = [];
  let odds = [];

  let howManyNumber = Number(prompt(`How many numbers would you like to enter?`));

  for (let i = 0; i < howManyNumber; i++) {
    let number = Number(prompt(`Please enter the numbers`));
    numbers.push(number)

  }

  for (let num of numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num)
    }
  }

  numbers.sort((a, b) => a - b);
  evens.sort((a, b) => a - b);
  odds.sort((a, b) => a - b);

  console.log("All numbers sorted:", numbers);
  console.log("Even numbers:", evens);
  console.log("Odd numbers:", odds);

};

processNumbers();