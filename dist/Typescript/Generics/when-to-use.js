"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplayName = void 0;
const getDisplayName = (item) => {
    if ('name' in item) {
        return {
            animalName: item.name,
        };
    }
    else {
        return {
            humanName: `${item.firstName} ${item.lastName}`,
        };
    }
};
exports.getDisplayName = getDisplayName;
