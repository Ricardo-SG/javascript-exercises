const findTheOldest = function(persons) {
    
    const persSorted = persons.sort(
        function(a,b) {
            
            const lastGuy = getAge(a.yearOfBirth,a.yearOfDeath);
            const nextGuy = getAge(b.yearOfBirth,b.yearOfDeath);

            return lastGuy > nextGuy ? -1 : 1;
        }
    );
    const oldest = persSorted[0].name;
    // console.log(persSorted);
    // console.log(persSorted[0]);
    // console.log(persSorted[0].name);
    // console.log(oldest);
    console.table(persSorted);
    return(oldest);
    
}

function getAge(birth, death) {
    // console.log('death is ' +death)
    // console.log(death === undefined);
    // console.log(death == undefined);
    if (death === undefined || death === null || death === 0) {
        death = new Date().getFullYear();
        // console.log('new death: ' +death);
    }

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
