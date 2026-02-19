//  Taş - Kağıt - Makas


const startGame = () => {
  let userScore = 0;
  let computerScore = 0;

  while (true) {
    let userSelect = prompt(`Choose one: Rock / Paper / Scissors (or type ‘exit’ to end the game)`)

    userSelect = userSelect.toLocaleLowerCase().trim();

    if (userSelect === `exit`) {
      console.log(`Game is over! Total score - You: ${userScore}, Computer: ${computerScore}`)
      break;
    }

    if (userSelect !== `rock` && userSelect !== `paper` && userSelect !== `scissors`) {
      console.log(`Invalid selection! Please write ‘rock’, ‘paper’, or ‘scissors’.`)
      continue;
    }

    let computerMove = [`rock`, `paper`, `scissors`].at(Math.floor(Math.random() * 3));
    console.log(`Computer selection: ${computerMove}`);

    if (userSelect === computerMove) {
      console.log(`Draw`)
      console.log(`Score: You: ${userScore}, Computer: ${computerScore}`);
    } else if (
      (userSelect === `rock` && computerMove === `scissors`) ||
      (userSelect === `paper` && computerMove === `rock`) ||
      (userSelect === `scissors` && computerMove === `paper`)
    ) {
      console.log(`You win!`);
      userScore++;
      console.log(`Score - You: ${userScore}, Computer: ${computerScore}`);
    } else {
      console.log(`You lost!`);
      computerScore++;
      console.log(`Score - You: ${userScore}, Computer: ${computerScore}`)
    }
  }
}

startGame();