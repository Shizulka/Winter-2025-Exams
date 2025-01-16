'use strict'

const isValidate = (T) => {
  if (typeof T !== 'string' || T.length === 0 || !T.includes(' ')) return false;

  for (const C of T) {
    if (C !== ' ' && !/^[a-zA-Z]$/.test(C)) return false;
  }
  return true;
}

module.exports = isValidate;
