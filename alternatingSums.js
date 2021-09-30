function alternatingSums(a) {
  let teams = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      teams[0] += a[i];
    } else {
      teams[1] += a[i];
    }
  }

  return teams;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
