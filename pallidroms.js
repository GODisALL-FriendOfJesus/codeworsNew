 // Compare characters from outside inwards
// If there's 1 mismatch, change one of them to match the other
// // If there are 0 mismatches, we MUST still change 1 character:
  // - If length is odd, we can change the middle character to itself (valid)
  // - If length is even, changing any character breaks the palindrome (invalid)
  // More than 1 mismatch cannot be fixed with a single character change
function solve(str) {
  let diffCount = 0;
  let len = str.length;

 
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      diffCount++;
    }
  }

  
  if (diffCount === 1) return true;

  
  if (diffCount === 0) return len % 2 !== 0;

  
  return false;
}
console.log(solve("aa"));