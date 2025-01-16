'use strict'

const Day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const NumDay = (days) => {

  const index = Day.findIndex((day) => days.startsWith(day.toLowerCase()));

  return index === -1 ? -1 : index + 1
}

module.exports = NumDay;