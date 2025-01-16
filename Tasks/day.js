const Week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

NumDay = (day) => {
  let i;
  for (i = 0; i < Week.length; i++) {
    if (day.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = NumDay;