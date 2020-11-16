function frequency(s) {
  const arr = new Array(26).fill(0);
  const aToZ = [];

  const regex1 = /1[0-9]#\(\d+\)|2[0-6]#\(\d+\)|1[0-9]#|2[0-6]#/gm;
  const over10NumArr = s.match(regex1);

  const regex2 = /([1-9]\(\d+\))/gm;
  const to9NumArr = s.match(regex2);

  for (let i = 1; i <= 26; i++) {
    i < 10 ? aToZ.push(`${i}`) : aToZ.push(`${i}#`);
  }

  if (to9NumArr) {
    to9NumArr.forEach((num) => {
      s = s.replace(num, "");

      const index = aToZ.findIndex((el) => el === num.split(/\(/)[0]);
      const count = Number(num.split(/\(/)[1].replace(")", ""));
      arr[index] += count;
    });
  }

  if (over10NumArr) {
    over10NumArr.forEach((num) => {
      s = s.replace(num, "");

      if (/1[0-9]#\(\d+\)|2[0-6]#\(\d+\)/.test(num)) {
        const index = aToZ.findIndex((el) => el === num.split(/\(/)[0]);
        const count = Number(num.split(/\(/)[1].replace(")", ""));
        arr[index] += count;
      } else {
        const index = aToZ.findIndex((el) => el === num);
        arr[index] += 1;
      }
    });
  }

  if (s) {
    s.split("")
      .map((char) => (char = Number(char)))
      .forEach((num) => {
        arr[num - 1] += 1;
      });
  }

  return arr;
}
