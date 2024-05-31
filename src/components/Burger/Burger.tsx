import React from 'react';
import {BurgerProps} from "../../types.ts";

const Burger: React.FC<BurgerProps> = ({ ingredients, allIngredients })=> {



    return (
        <>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {ingredients.map(ingredient => {
                    const ingredientInfo = allIngredients.find(i => i.name === ingredient.name);
                    return (
                        <div key={ingredient.name} className={`ingridient-container`}>
                            {Array.from({ length: ingredient.count }).map((_, index) => (
                                    <div key={index} className={ingredientInfo?.name}></div>
                                ))}
                        </div>
                    );
                })}
                <div className="BreadBottom"></div>
            </div>
        </>
    );
};

export default Burger;