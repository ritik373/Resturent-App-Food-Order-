import React from 'react';
import classes from './MealsItem.module.css';
import MealsForm from  './MealsForm';
import { useContext } from 'react';
import Contextcart from '../../../store/cart-context'

const MealsItem = (props)=>{
    const cartctx= useContext (Contextcart)
     const price =`$${props.price}`;

     const addToCartAmountHandler=(amount)=>{
        //  console.log(cartctx.addItem(56))
         
         cartctx.addItem(
             {
             id:props.id,
             name:props.name,
             amount:amount,
             price:props.price,
            })
 }  
    return(


        <div className={classes.meals} >
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>


        <MealsForm  addToCartAmount={addToCartAmountHandler} />
        
         </div>
        
        
    )

}
export default MealsItem;