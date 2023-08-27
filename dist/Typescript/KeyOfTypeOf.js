"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustMenu = void 0;
// ------ typeof explain
function getCharacter() {
    return {
        firstName: 'Thuta',
        lastName: 'Sann ',
    };
}
function adjustMenu(menu, menuEntry, change) {
    menu[menuEntry] = change;
    return menu;
}
exports.adjustMenu = adjustMenu;
const simpleMenu = {
    starter: 'Salad',
    pizza: 'perce',
    beverage: 'coke',
    dessert: 'Vanilla',
};
adjustMenu(simpleMenu, 'beverage', 'change');
