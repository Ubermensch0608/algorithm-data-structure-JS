const globalArr = [-3, -2, -1, -1, 0, 1, 2, 2, 3, 3, 3]; // expected 7

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  const copyArr = [...arr];

  let i = 0;

  for (let j = 1; j < copyArr.length; j++) {
    if (copyArr[i] !== copyArr[j]) {
      i += 1;
      copyArr[i] = copyArr[j];
    }
  }

  return i + 1;
};

console.log('countUniqueValues: ', countUniqueValues(globalArr));
