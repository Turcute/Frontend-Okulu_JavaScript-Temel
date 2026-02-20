// Kullanıcıdan Alınan İsimler Arasında Arama ve Sayma


const searchNames = () => {
  let names = []

  let howManyNames = Number(prompt(`How many Names would you like to add?`));

  for (let i = 0; i < howManyNames; i++) {
    let name = prompt(`Please enter the names you wish to enter`);
    names.push(name);

    console.log(names)
  }

  let desiredName = prompt(`Which name would you like to search?`)

  let count = 0;

  for (let name of names) {
    if (name === desiredName) {
      count += 1
    }
  }

  if (count > 0) {
    console.log(`${desiredName} found ${count} times`);
  } else {
    console.log(`${desiredName} was not found in the list.`)
  }
}

searchNames ();