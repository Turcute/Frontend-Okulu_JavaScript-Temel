// Kullanıcıdan Alınan Sayılarda Tek ve Çift Toplamlarını Hesaplama 

const oddEven = () => {

  let numbers = []

  let howManyNumbers = Number(prompt(`How many Numbers would you like to add?`));

  for (let i = 0; i < howManyNumbers; i++) {
    let number = Number(prompt(`Please enter the numbers you wish to enter`));
    numbers.push(number);

  }

  let odd = 0;
  let even = 0;

  for (let number of numbers) {
    if (number % 2 === 0)
      even += number
    else {
      odd += number
    }
  }

  console.log(`Odd Total: ${odd}`);
  console.log(`Even Total: ${even}`);

}

oddEven();