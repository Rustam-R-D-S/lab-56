import React from 'react';
import {addIngridient} from "../../App.tsx";

const Button = () => {
    return (
        <div className='ingridientsButton'>
            <button onClick={addIngridient}></button>
        </div>
    );
};

export default Button;