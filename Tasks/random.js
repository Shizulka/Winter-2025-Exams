'use strict'

const Random = (min, max = min ) => {
    max === undefined;

    return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = Random;
