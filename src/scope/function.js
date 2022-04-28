function fruits() {
  var fruit = 'Apple'; // function scope
  console.log(fruit);
  if(true) {
    console.log(fruit);
  }
}

fruits();


const  anotherFunction = () => {
  var x = 1;
  var x = 2;

  let y = 2;
  let y = 3;
  console.log(x);
  console.log(y);
}

anotherFunction();