import React from "react";
export function Polynomial({ polynomial }) {
    let position = 0;
    return polynomial.map((pair) => {
        position += 1;
        return (pair[1] !== 0 &&
            <>  
                {(position > 1) && "+"}
                <input defaultValue={pair[1]} type="number"></input>
                x
                <sup><input defaultValue={pair[0]} type="number"></input></sup>
            </>);
    });
}
