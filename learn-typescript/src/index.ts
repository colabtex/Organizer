// Valid array, as the types of the elements match the types in the annotation
// (and in the proper order)
let user: [number, string] = [1, 'Johnny'];

// One shortfall of TS is that you can still push to the array like the one above
// (even though it shouldn not be allow based on the rules of TS)
// This is because it still compiles to valid JS -> { let user = [1, 'Johnny']; user.push(2); }
user.push(2);