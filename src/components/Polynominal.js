import React from "react";
export function Polynominal({ polynominal }) {
    return polynominal.map((pair) => {
        return (pair[1] !== 0 &&
            <>
                {(pair[1] !== 1) && pair[1]}
                {pair[0] !== 0 && "x"}
                {(pair[0] !== 1 && pair[0] !== 0) && <sup>{pair[0]}</sup>} +
            </>);
    });
}
