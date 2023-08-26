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
export {};
