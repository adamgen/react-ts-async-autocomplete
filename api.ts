const searchDbForLetter = letter =>
  new Promise(resolve => {
    // how slow do you want the db simulation to be?
    setTimeout(() => resolve(letter), 300);
  });

export const api = async text => {
  const textArr = text.split("");
  let i = 0;
  while (i < textArr.length) {
    await searchDbForLetter(textArr[i]);
    i++;
  }

  return text;
};
