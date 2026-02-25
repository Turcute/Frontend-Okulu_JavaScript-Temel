// Kullanıcıdan Alınan İsimleri Alfabetik Olarak Sıralama

const sortedNames = () => {

  let names = [];

  let howManyNames = Number(prompt(`How many names would you like to enter?`));

  for (let i = 0; i < howManyNames; i++) {
    let name = prompt(`Please enter the name you wish to enter`);
    names.push(name)
    console.log(`Name: ${name}`)
  }

  names.sort()

  console.log("Sorted List:", names);

}

sortedNames();