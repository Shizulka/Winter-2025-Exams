'use strict'

const Months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',];

const Month = (month) => {

  const index = Months.findIndex((m) =>  month.toLowerCase().startsWith(m));

  return index === -1 ? -1 : index + 1;

};

module.exports = Month;
