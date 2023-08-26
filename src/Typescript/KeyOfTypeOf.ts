// ------ typeof explain
function getCharacter(): { firstName: string; lastName: string } {
  return {
    firstName: 'Thuta',
    lastName: 'Sann ',
  };
}
type ICharacter = ReturnType<typeof getCharacter>;

// ------ keyof explain
interface IPizzaMenu {
  starter: string;
  pizza: string;
  beverage: string;
  dessert: string;
}

export function adjustMenu(
  menu: IPizzaMenu,
  menuEntry: keyof IPizzaMenu,
  change: string,
) {
  menu[menuEntry] = change;
  return menu;
}

const simpleMenu: IPizzaMenu = {
  starter: 'Salad',
  pizza: 'perce',
  beverage: 'coke',
  dessert: 'Vanilla',
};

adjustMenu(simpleMenu, 'beverage', 'change');
