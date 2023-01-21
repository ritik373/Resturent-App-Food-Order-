import React from 'react';

  import classes from './Header.module.css';
  import image from '../../assets/meals.jpg'
  import ButtonCart from './CartButtonIcon'; 


const Header = (props) => {
    return (<div>
        <header className={classes.header}>
        <h1>ReactMeals</h1>
        <ButtonCart onClick={props.onShowModal} />
        </header>
        <div className={classes['main-image']} >
        <img src={image} alt="Food order image not loaded"/>
        
      </div>
    </div>
    )
}

export default Header