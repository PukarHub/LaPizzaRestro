import React, { useState } from 'react';
// import axios from 'axios';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

    console.log(setMenuItems);

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-items">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))} 
      </div>
    </div>
  );
};

export default Menu;
