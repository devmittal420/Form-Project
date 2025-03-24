// function* myGenerator() {
//   yield* myGenerator2()
//   yield "Call another generator"
// }

// function* myGenerator2() {
//   yield "Hello"
// }

// const gen = myGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);


// Two-Way communication or Bi-directional generator
// function* bidirectionalGenerator() {
//   const x = yield "Enter a number:";
//   console.log("You entered:", x);
//   yield x * 2;
// }

// const gen2 = bidirectionalGenerator();
// console.log(gen2.next().value);
// console.log(gen2.next(5).value);


// function* myGenerator() {
//   let count = 1;
//   while (true) {
//     yield count++
//   }
// }

// const gen = myGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.return().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


// function* myGenerator() {
//   yield "Hello";
//   yield "World"
// }

// const gen = myGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);