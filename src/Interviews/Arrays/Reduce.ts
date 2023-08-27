export const numArras: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// ---- Filter
const filteredArr = numArras.filter((item, idx, arr) => {
  return item > 4;
});
console.log('filteredArr', filteredArr);

// ---- Reduce
const reducedArray: number = numArras.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log('reducedArray', reducedArray);

// ---- Remove Duplicate items from Array
const ageGroup: Array<number> = [18, 21, 1, 51, 18, 21, 5, 18, 7, 10];
const uniqueAgeGroup: Array<number> = ageGroup.reduce(function (
  accu: number[],
  currentValue: number,
): number[] {
  if (accu.indexOf(currentValue)) {
    accu.push(currentValue);
  }
  return accu;
},
[]);
console.log('uniqueAgeGroup', uniqueAgeGroup);

// ---- Reduce with Typescript
interface IPerson {
  firstName: string;
  lastName: string;
}
const personArr = [
  {
    firstName: 'thuta',
  },
  {
    latName: 'sann',
  },
];
const ReducedPerson = personArr.reduce<IPerson>((acc, curr) => {
  return {
    ...acc,
    ...curr,
  };
}, {} as IPerson);
console.log('ReducedPerson', ReducedPerson);

// ---- Reduce Array Object

const ArrObj = [{ value: 32 }, { value: 12 }, { value: 4 }];
const sumArrayObj = ArrObj.reduce<number>((acc, curr) => {
  return acc + curr.value;
}, 0);
console.log('sumArrayObj', sumArrayObj);

// ---- Reduce With Filter

interface IStaffs {
  role: 'admin' | 'manager';
  value: number;
}
const Staffs: IStaffs[] = [
  {
    role: 'admin',
    value: 10,
  },
  {
    role: 'manager',
    value: 30,
  },
  {
    role: 'admin',
    value: 40,
  },
];

const FilterAndSUm = Staffs.filter(
  (staf) => staf.role === 'admin',
).reduce<number>(function (accu: number, curr: IStaffs) {
  return accu + curr.value;
}, 0);

console.log('FilterAndSUm', FilterAndSUm);

// ---- Reduce With Dates
export const DATES = [
  '01/08/2022',
  '02/08/2022',
  '04/08/2022', // THis is the most recent date
  '04/07/2022',
].map((val: string) => new Date(val));

const maxDate = DATES.reduce<Date>((max: Date, d: Date) => {
  return d > max ? d : max;
}, DATES[0]);

console.log('maxDate', maxDate);
