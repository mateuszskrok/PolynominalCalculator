import React from "react";


function Polynominal({polynominal}){
    return polynominal.map((pair) => {
        return ( 
        pair[1]!==0 &&
        <>
            {(pair[1]!==1) && pair[1]} 
            {pair[0]!==0 && "x"}
            {(pair[0]!==1 && pair[0]!==0) && <sup>{pair[0]}</sup>} + 
        </>)
    }
    )
}

class PolynominalCalculator extends React.Component{

    state ={
       polynominalA : [
           [0,2],
           [1,4.2],
           [2,5],
           [3,0]
        ],
        polynominalB : [
            [0,2],
            [1,4.2],
            [2,51],
            [4,0]
         ],
    }
    render(){
        const {polynominalA, polynominalB} = this.state;
        
        polynominalA.sort()
        polynominalB.sort()

        var reduced = polynominalA.reduce((a,b) =>console.log({a,b}))
        console.log({reduced})

        const sum = polynominalA.map((pair) => {
            const same = polynominalB.find((pair2) => pair2[0] === pair[0])
            polynominalB.filter((pair2) => pair2[0] !== pair[0]) 
            if (same) 
                return [pair[0],pair[1]+same[1]]
            else return [pair[0],pair[1]]
        }
        )
        
        return(
            <>
            <p>
            A =
            <Polynominal polynominal={polynominalA}/>
            </p>
            <p>
            B = 
            <Polynominal polynominal={polynominalB}/>
            </p>
            <p> A + B =
            <Polynominal polynominal={sum}/>
            </p>
            </>
        )
    }
}

export default PolynominalCalculator;