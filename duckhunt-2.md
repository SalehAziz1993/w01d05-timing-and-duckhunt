# Duck Movement 

Uh oh, our ducks are overlapping! lets create a function that will move ducks to a random location on our page! (we will be using css left and top properties)

1. Create a function called moveDuck that takes a duck as a parameter. The function should:
  - Get a random left value between 0 and the width of the page
    - HINT: you will need to use Math.random() and look at window.innerWidth!
  - Get a random top value between 0 and the hight of the page
  - Set the css left and top properties on the duck
2. Now lets use our moveDuck function! In createDuck, call moveDuck passing in the duck you created!
3. Lastly, in the createDuck function use setInterval to call moveDuck every 2000ms - remember to pass in your duck!