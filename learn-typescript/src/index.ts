// ENUMS

// All three versions of SingleDigitNums are equivalent and evaluate to the same thing 
// However, notice the third version generates much more optimized code

// enum SingleDigitNums { Small, Medium, Large};
// enum SingleDigitNums { Small=0, Medium=1, Large=2};
const enum SingleDigitNums { Small, Medium, Large};

// To start at a different value, you just need to define the value of the first element
// (TS will infer the rest of the values)
enum DoubleDigitNums { Small = 10, Medium, Large};

// Use case of enums:
let singleSize: SingleDigitNums = SingleDigitNums.Medium;
console.log(singleSize);

// Use case of enums:
let doubleSize: DoubleDigitNums = DoubleDigitNums.Medium;
console.log(doubleSize);


// Notice you can have much more optimized code by declaring enums with const than let
// const enum TripleDigitSizes { Small = 100, Medium, Large};