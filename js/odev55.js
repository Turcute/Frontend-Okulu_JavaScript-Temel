// Kullanıcıdan Alınan Meyvelerin Tekrar Sayısını Hesaplama

fruits = [];

let howManyFruits = Number(prompt(`How many fruits would you like to add?`));

for (let i = 0; i < howManyFruits; i++) {
  let fruit = prompt(`Please enter the fruit you wish to enter`);
  fruits.push(fruit);
}


const countFruits = (fruits) => {
  let counts = {};

  for (let fruit of fruits) {
    if (counts[fruit]) {
      counts[fruit] += 1;
    } else {
      counts[fruit] = 1;
    }
  }
  console.log(counts);
}

countFruits(fruits);

console.log(`Fruits ${fruits}`);