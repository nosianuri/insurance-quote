import React from 'react';
import { menuItems } from '../menuItem';
import MenuItems from './MenuItems';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
    <ul className="menus">
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  </nav>
  )
}

export default Nav