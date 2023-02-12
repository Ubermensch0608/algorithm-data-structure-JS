const maxSubarraySum = (arr, amount) => {
  if (amount > arr.length) {
    return null;
  }

  const storage = -Infinity;

  for (let i = 0; i < amount.length - amount + 1; i++) {
    for (let j = 0; j < amount; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      amount = temp;
    }
  }

  return storage;
};

console.log(
  maxSubarraySum([1, 2, 3, 4, 2, 8, 6, 4], 2), // 14
);
