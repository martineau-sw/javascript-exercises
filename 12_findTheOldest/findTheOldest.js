const findTheOldest = function(people) {
  let person = people.reduce((oldest, currentPerson) => {
    return getAge(currentPerson) > getAge(oldest) ? currentPerson : oldest;
  }, people.at(0));
  return person;
};

function getAge(person) {
  return (person.yearOfDeath ? person.yearOfDeath : 2024) - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
