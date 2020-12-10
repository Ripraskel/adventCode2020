const fs = require ('fs');
const { once } = require('events');
const readline = require('readline');

async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./input.txt'),
            crlfDelay: Infinity
        });

        let numbers = [];

        rl.on('line', (line) => {
            numbers.push(line);
        });

        await once(rl, 'close');

        let numberOfValidPassword = 0;

        numbers.forEach(line => {
            // if (isPasswordValidPart1(line)) {
            //     numberOfValidPassword++;
            // }
            if (isPasswordValidPart2(line)) {
                numberOfValidPassword++;
            }
        })

        console.log(`There are ${numberOfValidPassword} valid passwords according to their policies`)

    } catch (err) {
        console.log(err);
    }
};

// ####### Part 1 #######
function isPasswordValidPart1(line) {
    // line should be a string: min-max letter: password 
    // min-max letter: make up the policy for the password.
    // eg {1-3 a: aabcdege} meets the policy as there are between 1 & 3 "a"s in the password

    // extract the variables
    const min = line.slice(0, line.indexOf("-"));
    console.log(`min = ${min}`);

    const max = line.slice(line.indexOf("-")+1, line.indexOf(" "));
    console.log(`max = ${max}`);

    const letter = line.slice(line.indexOf(" ")+1, line.indexOf(": "));
    console.log(`letter = ${letter}`);

    const password = line.slice(line.indexOf(": ")+1);
    console.log(`password = ${password}`);

    // get letter count
    let letterCount = 0;
    for (i=0; i < password.length; i++) {
        if (password.charAt(i) === letter) {
            letterCount++;
        }
    };

    // evaluate password against policy
    if (letterCount >= min && letterCount <= max) {
        return true;
    } else {
        return false;
    }
}

// Testing isPasswordValid function
// const dummyStringFail = "2-4 g: sffsfgs";
// const dummyStringPass = "3-5 f: sffsfgs";
// console.log(`This should return false: ${isPasswordValidPart1(dummyStringFail)}`);
// console.log(`This should return true: ${isPasswordValidPart1(dummyStringPass)}`);


// ####### Part 1 #######
function isPasswordValidPart2(line) {
    // line should be a string: min-max letter: password 
    // min-max letter: make up the policy for the password.
    // eg {1-3 a: aabcdege} meets the policy as there are between 1 & 3 "a"s in the password

    // extract the variables
    const pos1 = line.slice(0, line.indexOf("-"));
    console.log(`pos1 = ${pos1}`);

    const pos2 = line.slice(line.indexOf("-")+1, line.indexOf(" "));
    console.log(`pos2 = ${pos2}`);

    const letter = line.slice(line.indexOf(" ")+1, line.indexOf(": "));
    console.log(`letter = ${letter}`);

    const password = line.slice(line.indexOf(": ")+1);
    console.log(`password = ${password}`);

    // evaluate password against policy
    if ( password.charAt(parseInt(pos1)) === letter ) {
        return !(password.charAt(parseInt(pos2)) === letter);
    } else {
        return (password.charAt(parseInt(pos2)) === letter);
    }
}

// Testing isPasswordValid function
// const dummyStringFail1 = "2-4 g: sffsfgs";
// const dummyStringFail2 = "2-4 g: sgfgfgs";
// const dummyStringPass = "3-5 f: sdfsrgs";
// console.log(`This should return false: ${isPasswordValidPart2(dummyStringFail1)}`);
// console.log(`This should return false: ${isPasswordValidPart2(dummyStringFail2)}`);
// console.log(`This should return true: ${isPasswordValidPart2(dummyStringPass)}`);

// ####### Run Program #########
processLineByLine();


