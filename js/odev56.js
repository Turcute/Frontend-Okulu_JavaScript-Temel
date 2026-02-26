// Rastgele Sayı Tahmin Oyunu

const random = () => {

  let randomNumber = Math.floor(Math.random() * 10) + 1;

  let userRight = 5;

  while (userRight > 0) {
    console.log(`remaining rights: ${userRight}`);
    let guess = Number(prompt(`Guess a number between 1 and 10`));
    if (guess === randomNumber) {
      console.log(`Congratulations, you guessed correctly!`);
      break;
    } else if (guess < randomNumber) {
      console.log(`Try a larger number`);
      userRight = userRight - 1
    } else {
      console.log(`Try a smaller number`);
      userRight = userRight - 1

    }
  }

  if (userRight === 0) {
    console.log(`Game is over. Correct number: ${randomNumber}`);
  }

}

random();