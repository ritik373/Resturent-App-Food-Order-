import React from 'react';
import Dummy_data from './MealsData';
import { Fragment } from 'react';
import Card from '../UI/Card' 
import MealsItem from '../Meals/MealsItem/MealsItem'


const AvailableMeals=()=>{
    return (
       <div>
        <ul>
       {Dummy_data.map((data)=>{
            return <Card> 
            <MealsItem 
            key={Math.random().toFixed(5)}
            id={data.id}
            name={data.name}
            description={data.description}
            price={data.price}
            
            
            />
            </Card>
            // console.log(data.name)

       })}

       </ul>
        </div>
    )


}
export default AvailableMeals;