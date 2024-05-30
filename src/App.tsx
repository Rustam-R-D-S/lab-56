import React from 'react';
import "./App.css"
import meatImage from "./assets/beef-cutlet-grill-stripes-isolated-260nw-2319496353.webp"
import cheeseImage from "./assets/4fb44b4b-29f1-4727-956b-435eb7be990a1698667887900.png"
import saladImage from "./assets/41e6d7a5-9b78-4f22-9384-10faae73d6181698667889954.png"
import beaconImage from "./assets/73379969-42d5-4f77-9ac9-340e4668aa4a1698667890175.png"

const INGREDIENTS: Ingredient[] = [

    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50 , image: cheeseImage},
    {name: 'Salad', price: 10, image:saladImage },
    {name: 'Beacon', price: 60, image:beaconImage },
];


const App = () => {



    return (
        <>
            <div className={"container"}>
                <div className={"ingridients"}>ingridients</div>
                <div className={"burger"}>burger</div>
            </div>
        </>
    );
};

export default App;