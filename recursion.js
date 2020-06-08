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

