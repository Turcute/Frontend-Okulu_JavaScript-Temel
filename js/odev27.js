// Kullanıcıdan Alınan Verilerle Dizi Oluşturma (for)

let userArray = []

let userInput = Number(prompt(`How many names do you want to enter? (Answer with a number)`))

for (let i = 0; i < userInput; i++) {
  let name = prompt(`Please enter a name`)
   userArray.push(name);
}

console.log(`Names: ${userArray}`)