const { addBits, addBinary } = require('./index');

test('addBits follows the bitwise addition rules', () => {
  expect(addBits(1, 0, 0)).toEqual([0, 1]);
  expect(addBits(1, 1, 0)).toEqual([1, 0]);
  expect(addBits(1, 0, 1)).toEqual([1, 0]);
  expect(addBits(1, 1, 1)).toEqual([1, 1]);
  expect(addBits(0, 0, 0)).toEqual([0, 0]);
  expect(addBits(0, 1, 0)).toEqual([0, 1]);
  expect(addBits(0, 0, 1)).toEqual([0, 1]);
  expect(addBits(0, 1, 1)).toEqual([1, 0]);
});

// testing that function does not return incorrect values
// gives a good indication of the function's correctness
test("addBits doesn't return incorrect results", () => {
  expect(addBits(0, 0, 0)).not.toEqual([0, 1]);
  expect(addBits(0, 1, 0)).not.toEqual([1, 0]);
});

test('addBinary correctly adds two binary arrays of the same length', () => {
  const eight = [1, 0, 0, 0];
  const two = [0, 0, 0, 1];
  const three = [0, 0, 1, 1];
  const fifteen = [1, 1, 1, 1];

  const ten = [0, 1, 0, 0, 1];
  const eleven = [0, 1, 0, 1, 1];
  const sixteen = [1, 0, 0, 0, 0];
  const thirty = [1, 1, 1, 1, 0];

  expect(addBinary(eight, two)).toEqual(ten);
  expect(addBinary(eight, three)).toEqual(eleven);
  expect(addBinary(eight, eight)).toEqual(sixteen);
  expect(addBinary(fifteen, fifteen)).toEqual(thirty);
});

test("addBinary doesn't return incorrect results", () => {
  const eight = [1, 0, 0, 0];
  const two = [0, 0, 0, 1];

  expect(addBinary(eight, two)).not.toEqual([0, 1, 0, 1, 1]);
});
