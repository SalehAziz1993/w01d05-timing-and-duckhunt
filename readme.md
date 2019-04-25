# Timing Functions

When using javascript in the browser we automatically have access to the `window` object. This object gives us a whole bunch of stuff to use! One that we already know is `alert()`. 

### setTimeout 

- A function that comes from our window object
- Allows us to preform an action after a set amount of time
- Takes 2 arguements:
  1. A callback function to be invoked once the time has passed
  2. How much time (in milliseconds) you want to pass before invoking the callback 

```js
setTimeout(function(){
  alert('Hello World!')
}, 2000)
```

The timeout above will alert 'Hello World!' in 2 seconds (5000 milliseconds)

### setInterval 

- A function that comes from our window object
- Like setTimeout, but repeats the action every ____ milliseconds.

```js
setInterval(function(){
  alert('Hello World!')
}, 2500)
```

Intervals will run forever... unless you stop them. When you set an interval, an index is returned representing the interval. We can then use the function `clearInterval` passing in the index to clear the specific interval. 

```js 
var logCount = 0;
var logInterval = setInterval(function(){
  console.log(logCount);
  if (logCount === 10) {
    clearInterval(logInterval)
    console.log("DONE")
  } else {
    logCount++
  }
}, 1000)
```

# DUCK HUNT LAB!

[![duck hunt](https://media.giphy.com/media/Rs2iAnfEImXIs/giphy.gif)](https://www.youtube.com/watch?v=x-daxzVxrQI)

This afternoon we will be creating the game Duck Hunt using jQuery! The game has the following functionality:
- Ducks appear on the screen
- They move to random locations
- When the ducks are clicked, they are shot and removed from the screen

1. [Part 1](duckhunt-1.md)
2. [Part 2](duckhunt-2.md)
3. [Part 3](duckhunt-3.md)