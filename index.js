function startGame() {
    //Save Starting Bet
    const startingBet = parseInt(document.getElementById("startingBet").value);
    //hold current amount of money for each game
    let currentMoneyHeld = startingBet;
    //holds highest amount of money held
    let highestMoneyHeld = 0;
    // rolls at highestMoneyHeld
    let rollsAtHighest = 0;
    //keep track of rolls
    let i = 0;
    if (startingBet <= 0) {
        //If the starting bet is less than or equal to 0, display an error message.
        alert("Error, Your starting bet is not enough. Please try again.")
    } else {
        //When the user clicks the Play button, the program then rolls the dice repeatedly until all the money is gone. 
        while (currentMoneyHeld > 0) {
            //Use a loop construct to keep playing until the money is gone.

            i++; //The program keeps track of how many rolls were taken before the money ran out starting with game 1.


            //Roll 2 dice
            const diceOne = Math.floor(Math.random() * 6) + 1;
            const diceTwo = Math.floor(Math.random() * 6) + 1;

            const diceSum = diceOne + diceTwo;
            console.log(`Dice sum: ${diceSum}`);
            if (diceSum !== 7) {
                console.log("You lose!");
                //when lose subtact 1 from moneyLeft
                currentMoneyHeld -= 1;
            } else {
                console.log("You win!");
                //when win add 4 to moneyLeft
                currentMoneyHeld += 4;

                if (currentMoneyHeld > highestMoneyHeld) {
                    // The program keeps track of the maximum amount of money held by the player.
                    highestMoneyHeld = currentMoneyHeld;
                    // The program keeps track of how many rolls were taken at the point when the user held the most money.
                    rollsAtHighest = i;
                }

            }


        }
        console.log(`
       Money Left:${currentMoneyHeld} 
       Starting Bet: ${startingBet}
       Total Rolls Before Going Broke:${i}
       Highest Amount Won :${highestMoneyHeld} 
       Roll Count at Highest Amount:${rollsAtHighest}  
    
       `);
        document.getElementById("startingBetAmount").innerHTML = startingBet;
        document.getElementById("rollsBeforeBroke").innerHTML = i;
        document.getElementById("highestWon").innerHTML = highestMoneyHeld;
        document.getElementById("rollAtHighest").innerHTML = rollsAtHighest;
    }

}