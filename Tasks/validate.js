// Refactor following solution
// Validate person name

const isValidate = (T) => {
  if (typeof T !== 'string' || T.length === 0 || !T.includes(' ')) return false;

    for (C of T) {
      if (C === ' ') continue;
      if (
        C.toLowerCase().charCodeAt(0) >= 97 &&
        C.toLowerCase().charCodeAt(0) <= 122
      ) {
      } else {
        return false;
      }
    }
    return true;

};

module.exports = isValidate;
