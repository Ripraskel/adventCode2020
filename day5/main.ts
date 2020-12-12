import * as fs from 'fs';
import { once } from 'events';
import * as readline from 'readline';

async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./input.txt'),
            crlfDelay: Infinity
        });

        let seatList: string[] = [];
        
        rl.on('line', (line: string) => {
            seatList.push(line);
        });

        await once(rl, 'close');

        // Part 1
        
        seatList.forEach((seat: string) => {
            console.log(seat);
        })
        

        // Part 2
        

    } catch (err) {
        console.log(err);
    }
};

// Part1

// ####### Run program #######
processLineByLine();