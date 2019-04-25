$(document).ready(function() {

  // I'll do some of the work for you, first I will grab the <body></body>
  var body = $('body');


  // Duck creation!

  // Create a "createDuck" function that creates a duck with these steps:
  // - create a div with a class of "duck" 
  // - append it to the body
  // - use setInterval to toggle the class "flap" on the duck every 250ms
  function createDuck(){
    var $duck = $('<div>').addClass('duck');
    body.append($duck);

    setInterval(function(){
      $duck.toggleClass('flap');
    }, 250)

    // Now lets use our moveDuck function! In createDuck, call moveDuck
    // passing in the duck you created!
    moveDuck($duck);

    // Lastly, in the createDuck function use setInterval to call moveDuck
    // every 2000ms - remember to pass in your duck!
    setInterval(function(){
      moveDuck($duck);
    }, 2000)

    $duck.click(function(){
      shootDuck($duck);
    })
  }


  // Use a for loop to call createDuck 5 times (they will overlap so open
  // your console to see if they are all there!)
  var timerInterval;

  function startGame(){
    for (var i = 0; i < 5; i++) {
      createDuck();
    }
    var timer = 0;
     timerInterval = setInterval(function(){
      timer ++;
      console.log(timer);
      if(timer === 10) {
        clearInterval(timerInterval);
        alert("You Lose!");
        body.empty();
        startGame();
      }
    }, 1000)
  }

  startGame();

  // Uh oh, our ducks are overlapping! lets create a function that will
  // move ducks to a random location on our page! (we will be using css
  // left and top properties)

  // Create a function called moveDuck that takes a duck as a parameter
  // The function should:
  // - Get a random left value between 0 and the width of the page
  //   HINT: you will need to use Math.random() and look at window.innerWidth!
  // - Get a random top value between 0 and the hight of the page
  // - Set the css left and top properties on the duck
  function moveDuck(duck){
    var randomLeft = Math.random() * window.innerWidth;
    var randomTop = Math.random() * window.innerHeight;
    duck.css({
      left: randomLeft,
      top: randomTop
    });
  }



  
  // Now we need to interact with the ducks! When we click them, we 
  // want them to be shot. Lets make a function that will do this for us

  // Create a function called shootDuck that takes a duck as a parameter
  // that does the following:
  // - add the class "shot" to the duck 
  // - after 100ms remove the duck from the DOM
  // - read the DOM to see if there are any ducks left. If not, alert "YOU WIN!"
  function shootDuck(duck) {
    duck.addClass('shot');
    setTimeout(function(){
      duck.remove();
      if($('.duck').length === 0){
        console.log($('.duck'))
        clearInterval(timerInterval)
        alert('YOU WIN!!!');
        startGame();
      }
    }, 100)
  }

  // We want our shootDuck function to fire when we click on a duck. 
  // add an event listener in createDuck that will call shootDuck with the 
  // created duck!


  // FIN. You win 1 trillion tokens.  Play the day away!

  /////////////////////////////////////////////////////////////////////
  // BONUSES

  // 1. Once you win, restart the game! 
  // 2. Have a timer displayed on the page counting down. If the player
  //    doesn't click all of the ducks within the timer, they lose
  // 3. Each time you restart the game, add more ducks, or decrease the
  //    time they have to click the ducks, or make the ducks move faster!

})



