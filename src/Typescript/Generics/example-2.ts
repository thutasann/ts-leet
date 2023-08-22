export const last = <T>(arr: Array<T>): T | undefined => {
  return arr[arr.length - 1];
};

export const makeArr = <T, Y, Z>(x: T, y: Y, z: Z): [T, Y, Z] => {
  return [x, y, z];
};
const va1 = makeArr(2, 3, 4);
const val2 = makeArr<string, number, boolean>('string', 2, false);

export const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T,
): T => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};
const FullName = makeFullName({ firstName: 'thuta', lastName: 'sann' });

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
