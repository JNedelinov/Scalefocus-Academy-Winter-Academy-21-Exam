function rearrange(elements) {
  return elements
    .slice(0)
    .sort()
    .map((a) => a.toString(2))
    .sort((a, b) => sortNums(a, b))
    .map((a) => parseInt(a, 2));
}

const sortNums = (a, b) => {
  const onesInA = a
    .split("")
    .reduce((acc, curr) => (+curr === 1 ? (acc += 1) : acc), 0);
  const onesInB = b
    .split("")
    .reduce((acc, curr) => (+curr === 1 ? (acc += 1) : acc), 0);

  if (onesInA - onesInB === 0) {
    return parseInt(a, 2) - parseInt(b, 2);
  }

  return onesInA - onesInB;
};
