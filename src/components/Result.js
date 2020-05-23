import React from "react";
export function Result({ polynomial }) {
    let position = 0;
    return polynomial.map((pair) => {
        position += 1;
        console.log(position)
        return (pair[1] !== 0 &&
            <>  
                {((position > 1) && (pair[1] >0)) && "+" }
                {((pair[1] !== 1) && (pair[1] !== -1)) && pair[1]}
                {(pair[1] === -1) && "-"}
                {pair[0] !== 0 && "x"}
                {(pair[0] !== 1 && pair[0] !== 0) && <sup>{pair[0]}</sup>}
            </>);
    });
}