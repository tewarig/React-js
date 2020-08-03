function sayHi() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  //i is still avalible inside whole function
  //let is only inside a block
  //var -> function scope
  //let ->  block scope
  //const -> block scope
  console.log(i);
}

sayHi();
