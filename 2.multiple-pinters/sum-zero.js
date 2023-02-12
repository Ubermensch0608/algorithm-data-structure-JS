const settingArr = [-3, -2, -1, 0, 2, 3, 1];

const sumZero = (arr) => {
  const copyArr = [...arr];

  for (let i = 0; i < copyArr.length - 1; i++) {
    // eslint-disable-next-line no-unreachable-loop
    for (let j = 0; j < copyArr.length - 1; j++) {
      if (copyArr[i] + copyArr[j] === 0) {
        return [copyArr[i], copyArr[j]];
      }
    }
  }

  return undefined;
};

console.log('original: ', sumZero(settingArr));

const refactorSumZero = (arr) => {
  const copyArr = [...arr];
  let left = 0;
  let right = copyArr.length - 1;

  while (left < right) {
    console.log(left, right);
    const sum = copyArr[left] + copyArr[right];

    if (sum === 0) {
      return [copyArr[left], copyArr[right]];
    }

    if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return undefined;
};

console.log('refactor: ', refactorSumZero(settingArr));
