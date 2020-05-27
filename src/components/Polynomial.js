import React from "react";

function Polynomial({polynomial, onCoefficientChange, onExponentChange, onAddTerm, pIndex}){
    
    let position = 0;
    return(
        <p>
        {pIndex ? "B = " : "A = "} 
        {polynomial.map((pair,index) => {
            position += 1;
            return (
                <>  
                    {(position > 1) && "+"}
                    <input 
                        className="coefficient" 
                        onChange={(event) => onCoefficientChange(pIndex, event.currentTarget.valueAsNumber, index)} 
                        value={pair[1]}
                        type="number">
                    </input>
                    x
                    <sup>
                        <input 
                            className="exponent" 
                            onChange={(event) => onExponentChange(pIndex, event.currentTarget.valueAsNumber, index)} 
                            value={pair[0]} 
                            type="number">
                        </input>
                    </sup>
                </>);
             })}
            <button title="Add a term" onClick={() => onAddTerm(pIndex)}>+</button>
        </p>
    )
    }

export default Polynomial;
