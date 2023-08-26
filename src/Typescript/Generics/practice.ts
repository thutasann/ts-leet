import { mockProducts, mockUsers } from './mocks';

function removeFirstEntryFromArry<T extends number | string>(arr: T[]): T[] {
  return arr.splice(1);
}

// ----------

function printName<T extends { name: string }>(input: T): T {
  return input;
}
printName({ name: 'thuta' });

// ----------

interface IEntity {
  id: string;
}
export interface IUser extends IEntity {
  name: string;
  email: string;
}
export interface IProduct extends IEntity {
  name: string;
  stock: number;
}
type ApiResponse<T extends IEntity> =
  | { status: 'success'; data: T[] }
  | { status: 'error'; error: string };

async function fetchMock<T extends IEntity>(
  mockData: T[],
): Promise<ApiResponse<T>> {
  return new Promise((res) =>
    res({
      status: 'success',
      data: mockData,
    }),
  );
}

async function fetchProducts(): Promise<ApiResponse<IProduct>> {
  return fetchMock(mockProducts);
}
async function fetchUsers(): Promise<ApiResponse<IUser>> {
  return fetchMock(mockUsers);
}
