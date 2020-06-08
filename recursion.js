// 1.

const countingSheep = function(sheep) {
  if (sheep === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(`${sheep}: Another sheep jumps over the fence`);
  countingSheep(sheep - 1);
};

// 2.

const powerCalculator = function(base, exp) {
  if (exp < 0) {
    return 'exponent should be >= 0';
  }

  if (exp === 0) {
    return 1;
  }

  return base * powerCalculator(base, exp - 1);
};

// 3.

const reverseString = function(str) {
  if (str.length === 0) {
    return '';
  }

  return reverseString(str.slice(1)) + str[0];
};

// 4.

const nth = function(input) {
  if (input === 0) {
    return;
  }

  return input + nth(input - 1);
};

// 5. 

const splitter = function(str, split, s = '') {
  if (str.length === 0){
    return [s];
  }

  if (str[0] !== split) {
    return splitter(str.slice(1), split, s + str[0]);
  } if (str[0] === split) {
    return [s, ...splitter(str.slice(1), split, s = '')];
  }
};

// 6. 

const fibonacci = function(input){
  if (input === 0){
    return 0;
  } else if (input === 1){
    return 1;
  }

  return fibonacci(input - 1 ) + fibonacci(input - 2);
};

// 7.

const factorial = function(input) {
  if (input === 0) {
    return 1;
  }

  return input * factorial(input - 1);
};

// 8.

const findOutOfMaze = function(maze, x = 0, y = 0) {  // lets set up coordinates we can pass through, these are def.
  //  rules: can't go out of bounds, through *, or onto a thing we've been on.
  // rule: let's always go right if we can, otherwise we go down, otherwise we go left.

  if (maze[y][x] === 'e') {
    return '';
  }

  if (maze[y][x] === ' ' && x < maze[y].length - 1 && maze[y][x + 1] !== '*') {
    return 'R' + findOutOfMaze(maze, x + 1, y);
  }

  if ((x === maze[y].length - 1 || maze[y][x + 1] === '*')) {
    return 'D' + findOutOfMaze(maze, x, y + 1);
  }

  if (maze[y][x + 1] === '*' || maze[y + 1][x] === '*') {
    return 'L' + findOutOfMaze(maze, x - 1, y);
  }
};

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '], // (6, 2) maze[2][6]
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// 9.

const findAllWaysOutOfMaze = function(maze) {

};

// 10.

const anagrams = function(prefix = ' ', sub) {
  if (sub.length <= 1) {
    console.log(`${prefix}${sub}`);
  } else {
    for (let i = 0; i < sub.length; i ++) {
      let current = sub.substring(i, i + 1); // E
      let previous = sub.substring(0, i); // ''
      let after = sub.substring(i + 1); // AST
      anagrams(prefix + current, previous + after);
    }
  }
};


// 11.

const chart = function(obj) {
  
};

let obj = {
  'Zuckerberg':
    {'Schroepfer':
        {'Bosworth':
            ['Steve',
              'Kyle',
              'Andra'],
        'Zhao':
            ['Richie',
              'Sofia',
              'Jen']
        },
    'Schrage':
        {'VanDyck':
            ['Sabrina',
              'Michelle',
              'Josh'],
        'Swain':
            ['Blanch',
              'Tom',
              'Joe']
        },
    'Sandberg': 
        {'Goler':
            ['Eddie',
              'Julie',
              'Annie'],
        'Hernandez':
            ['Rowi',
              'Inga',
              'Morgan'],
        'Moissinac':
            ['Amy',
              'Chuck',
              'Vinni'],
        'Kelley':
            ['Eric',
              'Ana',
              'Wes']}
    }
};

console.log(chart(obj));

// 12.

const binary = function(input) {
  // input 25
  // output 11001

  if (input <= 0) {
    return ''; // this coerces numbers to string.
  }

  const binary = input % 2;

  return binary(Math.floor(input/2)) + binary;

};



