import React from 'react';

const CartContext=React.createContext({
    items:[],
    amount: 0,
    addItem:(item)=>{console.log("you are in cart conetxt")},
    removeItem:(id)=>{},

})
export default CartContext;