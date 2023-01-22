import classes from './Cart.module.css';
import React from 'react';
import Modal from '../UI/Modal'
import Dummy_data from '../Meals/MealsData'
import contextData from '../../store/cart-context'
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const UseContextData = useContext(contextData);

    const orderShowButton = UseContextData.items.length > 0;
    const totalAmount = `$${UseContextData.amount.toFixed(2)}`;


    const onAddItemHandler = (item) => {
        UseContextData.addItem(item)
        // console.log("items added")
        // return;

    }
    const onRemoveHandler = (id) => {
        UseContextData.removeItem(id)
        
        // console.log("items Remove")

        // return;

    }
    return (
        <Modal onClick={props.hideModal}>
            <ul className={classes['cart-items']}>{UseContextData.items.map((items) => {
                return <CartItem
                        key={Math.random().toFixed(5)}
                        name={items.name}
                        price={items.price}
                        amount={items.amount}
                        onAdd={onAddItemHandler.bind(null,items)}
                        onRemove={onRemoveHandler.bind(null,items.id)}
                    />
                  })}
            
            </ul>

            <div className={classes.total}>
                <span>Total Amont</span>
                <span>{totalAmount}</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.hideModal}>close</button>
                {orderShowButton && <button className={classes.button}>Order</button>}
            </div>





        </Modal>

    )
}
export default Cart;