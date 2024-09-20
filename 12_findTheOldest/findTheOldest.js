const findTheOldest = function(arr) {
    year = new Date().getFullYear();
    sorted_arr = arr.toSorted((p1, p2) => ((p2.yearOfDeath || year) - p2.yearOfBirth) - ((p1.yearOfDeath || year) - p1.yearOfBirth))
    return sorted_arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
