interface IAnimal {
  name: string;
}

interface IHuman {
  firstName: string;
  lastName: string;
}

type IAnimalOrHuman<T extends IHuman | IAnimal> = T extends IHuman
  ? { humanName: string }
  : { animalName: string };

export const getDisplayName = <TItem extends IAnimal | IHuman>(
  item: IAnimal | IHuman,
): IAnimalOrHuman<TItem> => {
  if ('name' in item) {
    return {
      animalName: item.name,
    } as IAnimalOrHuman<TItem>;
  } else {
    return {
      humanName: `${item.firstName} ${item.lastName}`,
    } as IAnimalOrHuman<TItem>;
  }
};
