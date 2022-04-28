var a = 'a'; // global

function hello() {
  var b = 'b'; // local
  c = 'c' // global
  console.log(`${a} ${b} ${c}`);
}

hello();
console.log(c);