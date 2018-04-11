// Empty array to collect values from input
const valueInput = [];

//  Collect input
process.argv.forEach(function (val) {
    // Push input to valueInput array
    valueInput.push(val);
    // Return the array
    return valueInput
});
// Keep only the value to calculate - remove first two inputs (node app)
const mainvalue = valueInput.slice(2);

// Error message if argument = 0
if (mainvalue.length === 0) {
    console.log('Type in 10 + 5 and let me do the job!');
}

// Mainvalues joint into one string
const jointToString = mainvalue.join('');

//  add
if (jointToString.search(/[+]/) > 0) {
    // Split the string and take the numbers before and after the operator
    const splitedNumbers = jointToString.split(/[+]/);
    // log splited numbers
    console.log(splitedNumbers)
    // sum the numbers
    const sum = parseFloat(splitedNumbers[0]) + parseFloat(splitedNumbers[1]);
    // Result
    console.log(sum);
}

//  subtract
else if (jointToString.search(/[-]/) > 0) {
    // Split the string and take the numbers before and after the operator
    const splitedNumbers = jointToString.split(/[-]/);
    // log splited numbers
    console.log(splitedNumbers)
    // sum the numbers
    const sum = parseFloat(splitedNumbers[0]) - parseFloat(splitedNumbers[1]);
    // Result
    console.log(sum);
}

//  divide
else if (jointToString.search(/[/]/) > 0) {
    // Split the string and take the numbers before and after the operator
    const splitedNumbers = jointToString.split(/[/]/);
    // log splited numbers
    console.log(splitedNumbers)
    // sum the numbers
    const sum = parseFloat(splitedNumbers[0]) / parseFloat(splitedNumbers[1]);
    // Result
    console.log(sum);
}

//  multiply x for *
else (jointToString.search(/[x]/) > 0) {
    // Split the string and take the numbers before and after the operator
    const splitedNumbers = jointToString.split(/[x]/);
    // log splited numbers
    console.log(splitedNumbers)
    // sum the numbers
    const sum = parseFloat(splitedNumbers[0]) * parseFloat(splitedNumbers[1]);
    // Result
    console.log(sum);
}

