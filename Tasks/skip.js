'use strict'

const Skip = (T, ...Remove) => T.filter(item => !Remove.includes(item));

module.exports = Skip;
