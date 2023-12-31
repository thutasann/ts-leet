import { ReverseInteger } from './LeetCodes/ReverseInteger';
import { toFahreneit } from './BigO/ConstantTime/ConstantTime';
import { logNums } from './BigO/LinearTime/LinearTime';
import { logPairs } from './BigO/QuadraticTime/QuadraticTime';
import { numsIslands } from './LeetCodes/NumberOfIslands';
import { TwoSum } from './LeetCodes/TwoSum';
import { EMPLOYEE } from './Typescript/AccessModifiers';
import { fruitThree } from './Typescript/Enums';
import {
  getKeyWithHighestValueResult,
  getValueResult,
} from './Typescript/Generics/MasterGenerics';
import { playStationsConsole } from './Typescript/DepedencyInjection';

const str1 = '5';
const padded = String(str1).padStart(0, 'ok');

// Big O Notation
console.log('Constant Time -> ', toFahreneit(12));
logNums([1, 2, 3, 4, 5, 6, 7]);
logPairs([1, 2, 3]);

// Leet codes
console.log('Twosum', TwoSum([2, 7, 11, 15], 18));
console.log(
  'Number of Islands',
  numsIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]),
);
console.log('ReverseInteger', ReverseInteger(123));

// Typescripts
console.log('Access modifier', EMPLOYEE.getSalary(12));
console.log('Enum', fruitThree);
console.log('Constraints in Function => ', getKeyWithHighestValueResult.key);
console.log('Constraints in Function => ', getKeyWithHighestValueResult.value);
console.log('getValueResult', getValueResult);
console.log('depedencyInjection', playStationsConsole.play());
