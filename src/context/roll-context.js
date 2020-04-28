import React from 'react';

export const DiceBagContext = React.createContext({
    dice: [],
    rollAll: () => {},
    rollOne: () => {},
    addToDice: () => {},
    emptyDiceBag: () => {},
    removeFromDiceBag: () => {}
});