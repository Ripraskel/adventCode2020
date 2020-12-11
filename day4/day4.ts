import * as fs from 'fs';
import { once } from 'events';
import * as readline from 'readline';

async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./input.txt'),
            crlfDelay: Infinity
        });

        let passportBatch: string[] = [];
        // passportBatch[0] = "Ge";
        // console.log(passportBatch[0]);
        let index: number = 0;
        rl.on('line', (line: string) => {
            if (line === "") {
                index++;
            } else {
                if (passportBatch[index] != undefined) {
                    passportBatch[index] = `${passportBatch[index]} ${line}`;
                } else {
                    passportBatch[index] = line;
                }
            }
        });

        await once(rl, 'close');

        let validPassports: number = 0;
        passportBatch.forEach((passport: string) => {
            if (passportValidPart1(passport)) {
                validPassports++;
            }
        })

    } catch (err) {
        console.log(err);
    }
};

// Part1
function passportValidPart1 (passports: string): boolean {
    let result: boolean = false;

    return result;
}
// ####### Run program #######
processLineByLine();