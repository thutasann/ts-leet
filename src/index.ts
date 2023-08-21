import { toFahreneit } from './BigO/ConstantTime/ConstantTime';
import { logNums } from './BigO/LinearTime/LinearTime';
import { logPairs } from './BigO/QuadraticTime/QuadraticTime';
import { numsIslands } from './LeetCodes/NumberOfIslands';
import { TwoSum } from './LeetCodes/TwoSum';

// Big O Notation
console.log('Constant Time -> ', toFahreneit(12));
logNums([1, 2, 3, 4, 5, 6, 7]);
logPairs([1, 2, 3]);

// Leet codes
console.log('Twosum', TwoSum([2, 7, 11, 15], 18));
console.log('Number of Islands', numsIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));