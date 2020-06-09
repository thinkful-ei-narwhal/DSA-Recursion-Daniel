// 3. 

const reverseString = function(str) {
  let revS = '';

  for (let i = str.length - 1; i >= 0 ; i--) {
    revS += str[i];
  }
  return revS;
};

// 4.

const nth = function(input) {
  let count = 0;

  for (let i = 0; i < input; i++) {
    count += i;
  }

  return count;
};

// 5. 

const splitter = function(str, split) {
  let arr = [];
  let subS = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== split) {
      subS += str[i];
    } else {
      arr.push(subS);
      subS = '';
    }
  }
  arr.push(subS);
  return arr;
};

// 7.

const factorial = function(input) {
  let count = 1;

  for (let i = 1; i < input; i++) {
    count *= i;
  }

  return count;
};