export const getDateTimeStrings = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  return { time, date };
};
