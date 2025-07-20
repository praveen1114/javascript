console.log('Hello world');
var name = "Test";
console.log(name);

function exampleVar() {
  var name = "John";
  if (true) {
    var name = "Jane"; // same variable, function-scoped
    console.log(name); // Output: Jane
  }
  console.log(name); // Output: Jane
}

exampleVar();

let score=10;
score=20;
console.log(score)

function exampleConst() {
  const name = "John";
  if (true) {
    // name = "Jane"; // This will throw an error because `const` variables cannot be reassigned
    console.log(name); // Output: John
  }
}

exampleConst();

