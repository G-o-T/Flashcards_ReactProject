import React from "react";
import MenuItem from "./MenuItem";

function MenuItemsList() {
    
    const menuItems = [
        {
            id: 1,
            title:'dictionary',
        },
        {
            id: 2,
            title:'flashcards',
        }
    ];

    return (
        menuItems.map(menuItem => <MenuItem title={menuItem.title} key={menuItem.id}></MenuItem>)
    )
}

export default MenuItemsList;