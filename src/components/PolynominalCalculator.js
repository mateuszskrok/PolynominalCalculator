import React from "react";
import { AddPolynominals } from "./AddPolynominals";
import { Polynominal } from "./Polynominal";

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
    
        const sum = AddPolynominals(polynominalA, polynominalB)
        
        return(
            <>
            <p> A = <Polynominal polynominal={polynominalA}/></p>
            <p> B = <Polynominal polynominal={polynominalB}/></p>
            <p> A + B = <Polynominal polynominal={sum}/></p>
            </>
        )
    }
}

export default PolynominalCalculator;
