const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('\n');

const result = (function (input) { // array
	var result = '';
	for(let m = 0, mmax = input.length; m < mmax; m++) {
		if(m+1 >= input.length) { // n is last row, n1 does not exists
			break;
        }
		for(let n = m+1, nmax = input.length; n < nmax; n++) {
			let diff = 0;
            let c1 = input[m].split('');
            let c2 = input[n].split('');
            let equals = '';
            for(let i = 0, imax = c1.length; i < imax; i++) {
                if(c1[i] !== c2[i]) {
                    diff++;
                } else {
                    equals = equals + c1[i];
                }
            }
            if(diff === 1) {
                result = equals;
                break;
            }
        }
		if(result !== '') {
			break;
        }
    }
	return result;
})(input);

console.log(result);
