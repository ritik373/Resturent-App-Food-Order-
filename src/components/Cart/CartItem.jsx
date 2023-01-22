import classes from './CartItem.module.css';
import { useState } from 'react';

const CartItem = (props) => {
  // const [count,setCount]=useState(1)
  const price = `$${props.price.toFixed(2)}`;


  // const onclickCountHandler=()=>{
  //   setCount(count+1);
  // }
  // const onclickRemoveHandler=()=>{
  //   if(count>0){
  //   setCount(count-1);
  //   }
  // }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{props.amount}</span>
      
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove} >-</button>
        <button onClick={props.onAdd } >+</button>
      </div>
    </li>
  );
};

export default CartItem;
