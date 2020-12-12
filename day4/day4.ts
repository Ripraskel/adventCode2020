import * as fs from 'fs';
import { once } from 'events';
import * as readline from 'readline';
import {PFV} from './passportValidationTool';

async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./input.txt'),
            crlfDelay: Infinity
        });

        let passportBatch: string[] = [];
        
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

        // Part 1
        let validPassportsPart1: number = 0;
        passportBatch.forEach((passport: string) => {
            if (passportValidPart1(passport)) {
                validPassportsPart1++;
            }
        })
        console.log(`Part1: There ${validPassportsPart1} valid passports`)

        // Part 2
        let validPassportsPart2: number = 0;
        passportBatch.forEach((passport: string) => {
            if (passportValidPart2(passport)) {
                validPassportsPart2++;
            }
        })
        console.log(`Part2: There ${validPassportsPart2} valid passports`)

    } catch (err) {
        console.log(err);
    }
};

// Part1
function passportValidPart1 (passport: string): boolean {
    let result: boolean = true;

    PFV.forEach((field) => {
        if (field[0] === 'cid') {
            // Tbd as optional
        } else {
            if (!passport.includes(field[0])) {
                result = false;
                return result;
            }

        }
    });

    return result;
}

// Part2
function passportValidPart2 (passport: string): boolean {
    let result: boolean = true;

    try {
        PFV.forEach((field) => {
            if (field[0] === 'cid') {
                // Tbd as optional
            } else {
                if (null == passport.match(field[1])) {
                    result = false;
                    throw `Passport failed on ${field[0]} \n Passport: \n ${passport} \n`
                }
            }
        });
    } catch (err) {
        console.error(err);
    }
    

    return result;
}
// ####### Run program #######
processLineByLine();