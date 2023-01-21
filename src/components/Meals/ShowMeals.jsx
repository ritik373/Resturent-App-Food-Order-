import React, { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const ShowMeals=()=>{
    return (<Fragment>

        <MealsSummary />
        <AvailableMeals/>
        
        </Fragment>)
}
export default ShowMeals;