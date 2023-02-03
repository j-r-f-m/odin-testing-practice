const analyzeArray = (array) => {
  let sum = array.reduce((a, b) => {
    return a + b;
  });
  let average = sum / array.length;
  let min = Math.min(...array);
  let max = Math.max(...array);
  let lengthArr = array.length;
  return { average, min, max, length: lengthArr };
};

export { analyzeArray };
