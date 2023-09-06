const getCurrentDate = () => {
  // Add your solution here!
  const date = new Date();
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ];
  
  const formatMonth = month < 10 ? `0${month}` : month;
  const formatDay = day < 10 ? `0${day}` : day;

  return `${year}-${formatMonth}-${formatDay}`;
};

module.exports = {
  getCurrentDate,
};
