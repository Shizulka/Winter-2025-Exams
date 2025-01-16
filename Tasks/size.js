'use strict'

const size = (size) => {
  if (size === 0) return '0 byte';

  const units = ['byte', 'kb', 'mb', 'gb'];
  const exp = Math.floor(Math.log(size) / Math.log(1000));
  const value = size / Math.pow(1000, exp);

  return `${Math.round(value)} ${units[exp]}`;
};

module.exports = size;
