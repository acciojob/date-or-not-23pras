var isDate = function (input) {
    // If input is a Date object and it's valid
    if (input instanceof Date && !isNaN(input.getTime())) {
        return true;
    }
    
    // If input is a string or number, try to parse it as a date
    if (typeof input === 'string' || typeof input === 'number') {
        const parsedDate = new Date(input);
        return !isNaN(parsedDate.getTime());
    }
    
    // If it's not a valid date object or valid string, return false
    return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
