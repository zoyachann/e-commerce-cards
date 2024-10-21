import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useEffect } from 'react';
import { useState } from 'react';


 const CartDrawer = (props) => {
  const { open, toggleCartDrawer } = props;
  const[ cartItems, setCartItems] = useState([])
  console.log(cartItems);
  
  useEffect(()=>{
    const cartItemArr = localStorage.getItem("CartDrawer");
    setCartItems(cartItemArr);
    
  },[])

  return (
    <div>
      <Drawer open={open} onClose={() => toggleCartDrawer(false)}>
        <Box 
          sx={{ width: 250 }} 
          role="presentation" 
          onClick={() => toggleCartDrawer(false)}
        >
        </Box>
      </Drawer>
    </div>
  );
}

export default CartDrawer;