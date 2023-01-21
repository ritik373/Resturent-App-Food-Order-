import classes from './Cart.module.css';
import React from 'react';
import Modal from '../UI/Modal'
import Dummy_data from '../Meals/MealsData'

const Cart=(props)=>{

    return (
        <Modal onClick={props.hideModal}>
        <ul className={classes['cart-items']}>{Dummy_data.map((items)=>{
            return <div>

            <li>{items.name}</li> 
                
            <div className={classes.total}>
            <span>Total Amont</span>
            <span>{items.price}</span>
            </div>
            <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.hideModal}>close</button>
            <button className={classes.button}>Order</button>
            </div>
            </div>
   
          
        
            })}
            </ul>
            
          
        
        
        </Modal>
        
    )
}
export default Cart;