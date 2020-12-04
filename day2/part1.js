const fs = require('fs');

const input = fs.readFileSync('input', 'utf8').split('\n');

const checksum = (function (input) { // array
    var two = 0;
    var three = 0;

    for (var n in input) {
        let string = input[n].split('').sort().join('');
        if (/(.)(?=(?<!\1\1)\1(?!\1))/.test(string)) {
            two++;
        }

        if(/(.)(?=(?<!\1\1)\1\1(?!\1))/.test(string)) {
            three++;
        }
    }

    console.log(two);
    console.log(three);

    const checksum = two * three;

    return checksum;
})(input);

console.log(checksum);
