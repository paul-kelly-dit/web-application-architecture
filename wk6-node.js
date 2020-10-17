 if (tries > 0) {
    if (guess == randomNumber) {
      console.log("WINNER");
      process.exit();
    } else if (guess < randomNumber) {
      console.log("TOO LOW");
    } else if (guess > randomNumber) {
      console.log("TOO HIGH");
    } else {
      console.log("NOT A NUMBER");
    }
  } else {
    if (guess == randomNumber) {
      console.log("WINNER");
    } else {
      console.log("YOU LOSE! THE NUMBER WAS:", randomNumber);
    }
    process.exit();
  }
