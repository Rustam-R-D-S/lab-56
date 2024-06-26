import React, { useState } from 'react';
import "./App.css";
import meatImage from "./assets/beef-cutlet-grill-stripes-isolated-260nw-2319496353.webp";
import cheeseImage from "./assets/4fb44b4b-29f1-4727-956b-435eb7be990a1698667887900.png";
import saladImage from "./assets/41e6d7a5-9b78-4f22-9384-10faae73d6181698667889954.png";
import beaconImage from "./assets/73379969-42d5-4f77-9ac9-340e4668aa4a1698667890175.png";
import Burger from "./components/Burger/Burger.tsx";
import { Ingredient } from "./types.ts";

    export const INGREDIENTS: Ingredient[] = [
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Salad', price: 10, image: saladImage },
    { name: 'Bacon', price: 60, image: beaconImage },
];

const App = () => {
    const [ingredients, setIngredients] = useState([
        { name: 'Salad', count: 0 },
        { name: 'Cheese', count: 0 },
        { name: 'Meat', count: 0 },
        { name: 'Bacon', count: 0 },
    ]);
     const addIngredient = (name:string) => {
        setIngredients(prevIngredients =>
            prevIngredients.map(ingredient =>
                ingredient.name === name ? { ...ingredient, count: ingredient.count + 1 } : ingredient
            )
        );
    }
    const removeIngredient = (name: string) => {
        setIngredients(prevIngredients =>
            prevIngredients.map(ingredient =>
                ingredient.name === name ? { ...ingredient, count: Math.max(ingredient.count - 1, 0) } : ingredient
            )
        );
    }
    console.log(ingredients)

    const calculatePrice = () => {
        return ingredients.reduce((total, ing) => {
            const ingredient = INGREDIENTS.find(item => item.name === ing.name);
            return total + (ingredient ? ingredient.price * ing.count : 0);
        }, 30);
    };

    return (
        <>
            <div className={"container"}>
                <div className={"ingridients"}>
                    {INGREDIENTS.map(ingredient => (
                        <div key={ingredient.name} className="ingredient-buttons">
                            <button onClick={() => addIngredient(ingredient.name)}>Add {ingredient.name} <img
                                src={ingredient.image} alt={ingredient.name}/></button>
                            <button onClick={() => removeIngredient(ingredient.name)}>Remove {ingredient.name} </button>
                        </div>
                    ))}


                </div>
                <div className="burger-container">
                    <Burger ingredients={ingredients} allIngredients={ingredients}/>
                </div>
            </div>
            <div className="price">
                Total Price: {calculatePrice()} сом
            </div>
        </>
    );
};
export default App;
