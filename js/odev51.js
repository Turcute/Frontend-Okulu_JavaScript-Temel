// Kullanıcıdan Alınan Bilgilerle Dinamik Alışveriş Listesi Oluşturma

const createShoppingList = () => {

  let shoppingList = []

  let howManyItems = Number(prompt(`How many products would you like to add?`));

  for (let i = 0; i < howManyItems; i++) {
    let list = prompt(`Please write which product you want to add`);
    shoppingList.push(list)
  }

  return shoppingList; 
}

let result = createShoppingList();

console.log(result);
console.log(`Total product: ${result.length}`);
