const fs = require ('fs');
const { once } = require('events');
const readline = require('readline');

async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./input.txt'),
            crlfDelay: Infinity
        });

        let forest = [];

        rl.on('line', (line) => {
            forest.push(line);
        });

        await once(rl, 'close');

        console.log(`
            Part1: 
            You would encounter ${treesPart1(forest)} trees
        `)


        console.log(`
            Part2: 
            1. Right 1, Down 1: ${treesPart2(forest, 1, 1)}
            2. Right 3, Down 1: ${treesPart2(forest, 3, 1)}
            3. Right 5, Down 1: ${treesPart2(forest, 5, 1)}
            4. Right 7, Down 1: ${treesPart2(forest, 7, 1)}
            5. Right 1, Down 2: ${treesPart2(forest, 1, 2)}
        `);
    } catch (err) {
        console.log(err);
    }
};

// Part1
function treesPart1 (forest) {
    let numberOfTrees = 0;
    let position = 0;

    forest.forEach(line => {
        
        // need to actual position to account for repeating pattern
        let actualPosition = 0;
        if (line.length <= position){
            actualPosition = position%line.length;
        } else {
            actualPosition = position;
        }

        // check if on a tree
        if (line.charAt(actualPosition) === "#") {
            numberOfTrees++;
        }

        // increment position for next line
        position += 3;
    })


    return numberOfTrees;
}

// ####### Part 2 #######
function treesPart2 (forestMap, xMove, yMove) {
    let numberOfTrees = 0;

    let index = 0; // start at 0
    let xPos = xMove;

    forestMap.forEach(line => {
        
        if (index != 0 && index%yMove === 0) {
            
            // need to actual position to account for repeating pattern
            let actualPosition = 0;
            if (line.length <= xPos){
                actualPosition = xPos%line.length;
            } else {
                actualPosition = xPos;
            }

            // check if on a tree
            if (line.charAt(actualPosition) === "#") {
                numberOfTrees++;
            }
            
            // increment position for next line
            xPos += xMove;
        }        
        
        index++;
    })

    return numberOfTrees;
}

// ####### Run program #######
processLineByLine();