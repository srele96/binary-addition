function addBits(carry, a, b,) {
  let resultCarry, result;

  if (carry) {
    if (a === 0 && b === 0) {
      resultCarry = 0; result = 1;
    } else if (a === 1 && b === 1) {
      resultCarry = 1; result = 1;
    } else {
      resultCarry = 1; result = 0;
    }
  } else {
    if (a === 0 && b === 0) {
      resultCarry = 0; result = 0;
    } else if (a === 1 && b === 1) {
      resultCarry = 1; result = 0;
    } else {
      resultCarry = 0; result = 1;
    }
  }

  return [resultCarry, result];
}

function addBinary(a, b) {
  let result = [], carry = 0, i = a.length - 1;

  for (i; i >= 0; i--) {
    let [resultCarry, resultDigit] = addBits(carry, a[i], b[i]);

    carry = resultCarry;
    result[i + 1] = resultDigit;
  }

  result[i + 1] = carry;

  return result;
}

module.exports.addBits = addBits;
module.exports.addBinary = addBinary;
