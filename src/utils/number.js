export const toShortcutString = (num) => {
  const strNum = `${num}`;

  // Thousands
  if (strNum.length > 3 && strNum.length < 7) {
    return `${strNum.slice(0, strNum.length - 3)}K`;
  }

  // Millions
  if (strNum.length > 6) {
    return `${strNum.slice(0, strNum.length - 6)}M`;
  }

  return strNum;
};
