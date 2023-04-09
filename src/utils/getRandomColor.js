function getRandomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomColor = () => {
  const r = getRandomIntegerFromInterval(0, 255);
  const g = getRandomIntegerFromInterval(0, 255);
  const b = getRandomIntegerFromInterval(0, 255);

  return `rgb(${r}, ${g}, ${b})`;
};
