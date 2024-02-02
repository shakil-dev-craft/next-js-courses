"use client"

import { useState } from "react";

const State = () => {

    let [value, setValue] = useState(0);

    const add = () => {
        setValue(value + 1);
    };

    const remove = () => {
        if(value > 0) {
            value = value - 1;
            setValue(value);
        }else {
            return 'It is a negative number';
        }
    };

    const zero = () => {
        value = 0;
        setValue(value);
    };

    return (
        <div>
            <p>This is State from State.jsx</p>

            {/* show value */}
            <p>{value}</p>

            {/* btn */}
            <div className="flex gap-4">
                <button className="bg-green-600 text-white py-1 px-4 border-none outline-none" onClick={add}>Increase Value 1</button>
                <button className="bg-yellow-600 text-white py-1 px-4 border-none outline-none" onClick={remove}>Decrease Value 1</button>
                <button className="bg-red-600 text-white py-1 px-4 border-none outline-none" onClick={zero}>Value Zero</button>
            </div>
        </div>
    );
};

export default State;