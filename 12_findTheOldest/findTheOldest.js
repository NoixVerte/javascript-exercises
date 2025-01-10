const findTheOldest = function(people) {
    let oldestPersonAge = 0;
    let oldesPersonIndex;
    const currentYear = new Date().getFullYear(); 
    people.forEach(person => {
        person.yearOfDeath = person.yearOfDeath ?? currentYear;
        if (person.yearOfDeath - person.yearOfBirth > oldestPersonAge) {
            oldestPersonAge = person.yearOfDeath - person.yearOfBirth;
            oldesPersonIndex = people.indexOf(person);
        }
    });
    return people[oldesPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
