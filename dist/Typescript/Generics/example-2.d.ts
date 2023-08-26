export declare const last: <T>(arr: T[]) => T | undefined;
export declare const makeArr: <T, Y, Z>(x: T, y: Y, z: Z) => [T, Y, Z];
export declare const makeFullName: <T extends {
    firstName: string;
    lastName: string;
}>(obj: T) => T;
