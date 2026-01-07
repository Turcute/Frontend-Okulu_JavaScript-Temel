// Kullanıcıdan Alınan Verileri Yazdırma ( for of ile )

let userArray = []

let cities = Number(prompt(`How many cities would you like to enter?`))

for (let i = 0; i < cities; i++) {
  let city = prompt(`Please enter the name of a city:`)
  userArray.push(city);
}

for (let city of userArray) {
  console.log(`City: ${city}`);
}
