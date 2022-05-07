INVARIANTS - binary addition of the two arrays
1. Iteration should be done from the right to the left
2. Carry is the correct value
3. I go through each bit in each array from last to the first bit in A and B array
4. Index must be the same for A and B array
5. In the result array C the result is always stored at index + 1 because the length is a.length + 1
6. Calculate current two bits with the carry correctly - follows the rules of binary addition
7. Store the new carry correctly after the addition
8. I insert the carry at the very beginning of the resulting array correctly

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

INVARIANTS - binary addition invariants:
1. Adding the two bits always uses the carry in their addition
2. The carry is used even when it is 0
3. When 0 is added to another bit it does not change it's value

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// The rules of binary addition
has carry
1 0 0 - carry = 0, result = 1
1 1 0 - carry = 1, result = 0
1 0 1 - carry = 1, result = 0
1 1 1 - carry = 1, result = 1

doesn't have carry
0 0 0 - carry = 0, result = 0
0 1 0 - carry = 0, result = 1
0 0 1 - carry = 0, result = 1
0 1 1 - carry = 1, result = 0

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

BINARY-ADD(CARRY, I, J)
1. var result_carry, result
2. if CARRY
3.   if I == 0 and J == 0
4.     result_carry = 0; result = 1
5.   else if I == 1 and J == 1
6.     result_carry = 1; result = 1;
7.   else
8.     result_carry = 1; result = 0;
9.  else
10.   if I == 0 and J == 0
11.     result_carry = 0; result = 0
12.   else if I == 1 and J == 1
13.     result_carry = 1; result = 0;
14.   else
15.     result_carry = 0; result = 1;
16.
17. return result_carry, result

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

BINARY-ADDITION(A, B)
1. var C = [], carry = 0, i = A.length
2.
3. for i to 1
4.   carry, result = BINARY-ADD(carry, A[i], B[i])
5.   C[i + 1] = result
6.
7. C[i + 1] = carry
8.
9. return C
