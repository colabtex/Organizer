// Not valid, as only arrays of same types allowed when type has been annotated:
// let invalid_num: number[] = [1, 2, '3'];

// Valid, as all elements in array are of the type specified by the type annotation
let valid_num_1: number[] = [1, 2, 3];

// Also valid, as the elements in the array are all acceptable by an array of the type "any"
let valid_num_2: [1, 2, '3'];