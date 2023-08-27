interface IPizzaMenu {
    starter: string;
    pizza: string;
    beverage: string;
    dessert: string;
}
export declare function adjustMenu(menu: IPizzaMenu, menuEntry: keyof IPizzaMenu, change: string): IPizzaMenu;
export {};
