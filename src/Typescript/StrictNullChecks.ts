/**
 * Strict Null Checks
 */

const user : { name: string, age: number, password?: string} = {
    name: "thuta",
    age: 23,
    password: '234'
};

user.password?.toLocaleLowerCase();