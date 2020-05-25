import React from "react";
export function Result({ polynomial }) {
    if (polynomial.length === 1 && polynomial[0][1] === 0) return 0;
    else{
        let position = 0;
        return polynomial.map((pair) => {
        position += 1;
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
}