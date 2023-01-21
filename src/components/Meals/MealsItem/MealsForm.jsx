import React from 'react';
import Input from '../../UI/Input';
import classes from './MealForm.module.css';
import { useRef } from 'react';
import { useState } from 'react';

const MealsForm = props =>{ 
  const AmountInputRef=useRef()
  const [amountisValid,setAmountIsValid]=useState(true);


  const onSubmitHandler=(e)=>{
      e.preventDefault();
      const enteredAmount=AmountInputRef.current.value;
      const enteredAmountNumber=+enteredAmount;
      
      if(enteredAmount.trim().length===0 || enteredAmountNumber<1 ||enteredAmountNumber>5){
          setAmountIsValid(false);
          return;
      }
      props.addToCartAmount(enteredAmountNumber);
  }

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input lable="Amount" input={{
            ref:AmountInputRef,
            id:"amount_"+ props.id,
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1",
        }}
         />
        <button>+ Add</button>
        {!amountisValid&& <p>Please Enter the Rigth value (1-5) !!</p>}
        
        </form>

    )
}
export default MealsForm;