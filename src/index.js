module.exports = function reverse (n) {
  let result = '';
  let arr = Array.from(String(n));

  if (arr[0] === '-') {
    arr.shift();
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  
  return Number(result);
}
