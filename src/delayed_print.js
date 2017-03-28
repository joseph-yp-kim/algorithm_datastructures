// Write a function that will print the numbers 0 - 5, printing each number one second apart

function print() {
  // create a counter variable
  let count = 0;
  // create a closure that is immediately invoked
  (function loop() {
    // print the counter variable
    console.log(count);
    // increment the counter variable by one
    count += 1;
    // if counter is less than or equal to 5, then call setTimeout to call the closure again after 1 second
    if (count <= 5) setTimeout(() => loop(), 1000);
  })();
}