const getCurrentDate = () => {
  // Add your solution here!
  const date = new Date();
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ];
  // Log to console
  return `${year}-${month + 1}-${day}`;
};

module.exports = {
  getCurrentDate,
};
