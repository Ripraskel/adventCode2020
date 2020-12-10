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

        numbers.forEach(numberX => {

            numbers.forEach(numberY => {

                numbers.forEach(numberZ => {

                    if (numbers.indexOf(numberX) !== numbers.indexOf(numberY) !== numbers.indexOf(numberZ)) {
                        if ((parseInt(numberX) + parseInt(numberY) + parseInt(numberZ)) === 2020) {
                            console.log(`Number ${numberX} + ${numberY} + ${numberZ} = 2020`)
                            console.log(`Magic number is: ${parseInt(numberX) * parseInt(numberY) * parseInt(numberZ)}`)
                        }
                    }
                })
            })
        })

    } catch (err) {
        console.log(err);
    }
};

processLineByLine();
