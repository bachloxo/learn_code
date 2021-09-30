/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
Example
For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.
Ratiorg needs statues of sizes 4, 5 and 7.
*/

function makeArrayConsecutive2(statues) {
    let statuesNeeded = 0;
    // Sort array smallest to largest
    statues.sort((a, b) => {
        return a - b;
    })
    // Iterate through array and find gaps in values
    for(let i = 0; i < statues.length; i++) {
        // If there is a gap between neighboring numbers subtract higher number from lower number i.e. [3, 6] is 6 - 3. There is a gap of 3, so 2 numbers are missing i.e. 4, 5
        if(statues[i + 1] - statues[i] > 1) {
            statuesNeeded += statues[i + 1] - statues[i] - 1;
        }
    }
    return statuesNeeded;
}
