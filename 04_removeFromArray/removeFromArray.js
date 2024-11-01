const removeFromArray = function(array, target, ...targets) {
  for (const target of targets) {
    array = array.filter(element => element !== target)
  }

  return array.filter((element) => element !== target);
};

// Do not edit below this line
module.exports = removeFromArray;
