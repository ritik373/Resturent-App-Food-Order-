import CartContext from './cart-context';
import React,{ useReducer} from 'react';

// export const CartContext=createContext();

const defaultInitialItem={
    items:[],
    totalAmount:0,
}
const cartReducer=(state,action)=>{

    if(action.type=='ADD'){
        
        const updateItems=state.items.concat(action.item)
        const updateTotalAmount=state.totalAmount + action.item.price * action.item.amount
        console.log(updateTotalAmount);
        return {
            items:updateItems,
            totalAmount:updateTotalAmount,
        }

    }
    return defaultInitialItem;

}
const CartProvider=(props)=>{

    const [stateItme,dispatchItem]=useReducer(cartReducer,defaultInitialItem)


    const addCartItemHandler=(item)=>{
        dispatchItem({type:'ADD',item:item})
    };
    const removeCartItemhandler=(id)=>{
        dispatchItem({type:'REMOVE',id:id})
    };
  
    const cartContext={
        items:stateItme.items,
        amount:stateItme.totalAmount,
        addItem:addCartItemHandler,
        removeItem:removeCartItemhandler,
    }
    return <CartContext.Provider value={cartContext}>
            {props.childern}
           </CartContext.Provider>
}

export default CartProvider;