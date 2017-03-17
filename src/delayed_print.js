// Write a function that will print the numbers 0 - 5, printing each number one second apart

function delay() {
  let count = 0;
  (function loop() {
    setTimeout(function() {
      console.log(count);
      count += 1;
      if (count <= 5) loop();
    }, 1000);
  })();
}