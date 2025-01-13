const Random = (min, max = min ) => {
    max === undefined;

    return Math.floor(Math.random() * (max + 1));
    return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = Random;
