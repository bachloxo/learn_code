// Calculate the running mean of an array of ints.

function meanScores(scores) {
  let runningTotal = 0;
  let count = 0;
  let runningMean = [];
  for (let i = 0; i < scores.length; i++) {
    runningTotal += scores[i];
    count++;
    runningMean.push(Math.floor(runningTotal / count));
  }

  return runningMean;
}

console.log(meanScores([100, 20, 50, 70, 45]));
