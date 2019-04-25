# Duck Shooting

Now we need to interact with the ducks! When we click them; we want them to be shot. Lets make a function that will do this for us!
  
1. Create a function called shootDuck that takes a duck as a parameter that does the following:
  - add the class "shot" to the duck 
  - after 100ms remove the duck from the DOM
  - read the DOM to see if there are any ducks left. If not, alert "YOU WIN!"

2. We want our shootDuck function to fire when we click on a duck. Add an event listener in createDuck that will call shootDuck with the created duck!

## Bonuses

1. Once you win, restart the game! 
2. Have a timer displayed on the page counting down. If the player doesn't click all of the ducks within the timer, they lose
3. Each time you restart the game, add more ducks, or decrease the time they have to click the ducks, or make the ducks move faster!
