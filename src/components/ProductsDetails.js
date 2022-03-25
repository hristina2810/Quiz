import React from 'react';


export function ProductsDetails({food}) {

    
                return(
                    <div id="food">
                <ul>
                    <li>{food.name}</li>
                    <li>{food.domestic}</li>
                    <li>{food.price}</li>
                    <li>{food.weight}</li>
                    <li>{food.description}</li>
                </ul>
                </div>
                )
            }
        


            