interface IAnimal {
    name: string;
}
interface IHuman {
    firstName: string;
    lastName: string;
}
type IAnimalOrHuman<T extends IHuman | IAnimal> = T extends IHuman ? {
    humanName: string;
} : {
    animalName: string;
};
export declare const getDisplayName: <TItem extends IAnimal | IHuman>(item: IAnimal | IHuman) => IAnimalOrHuman<TItem>;
export {};
