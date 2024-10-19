import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     // Fetch the menu items from the backend
//     axios.get('/api/menu')
//       .then(response => setMenuItems(response.data))
//       .catch(error => console.log(error));
//   }, []);

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
