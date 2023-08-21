
/**
 * Number of Island
 * @param { string[][] } grid - Two Dimensional Array
 * @returns { number }
 */
export function numsIslands (grid: string[][]) : number {
    let countIslands = 0;

    for(let rowIndex in grid){
        for (let colIndex in grid[rowIndex]){
            console.log('grid[rowIndex][colIndex]', grid[rowIndex][colIndex])

            if(grid[rowIndex][colIndex] === '1'){
                countIslands++;
                teraform(parseInt(rowIndex), parseInt(colIndex), grid)
            }

        }
    }

    return countIslands;
}

/**
 * Helper: Convert stuff arround us to Water
 */
const teraform = (rowIn: number, colIn : number, grid : string[][]) : void => {
    
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0') return;
    
    grid[rowIn][colIn] = '0';

    teraform(rowIn + 1, colIn, grid); // top
    teraform(rowIn - 1, colIn, grid); // bottom
    teraform(rowIn, colIn + 1, grid); // right
    teraform(rowIn, colIn - 1, grid); // left
}