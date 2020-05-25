import React from "react";
import { AddPolynomials } from "./AddPolynomials";
import { Polynomial } from "./Polynomial";
import { Result } from "./Result";

class PolynomialCalculator extends React.Component{

    state = {
       polynomialA : [
            [0,-2]
        ],
        polynomialB : [
            [0,2]
         ],
        sum : []
    }

    handleReturnSum = () => {
        this.setState(prevState => {
            return{sum: AddPolynomials(prevState.polynomialA, prevState.polynomialB)}
        })
    }
    render(){
        const {polynomialA, polynomialB, sum} = this.state;
    
        return(
            <>
            <p> A = <Polynomial polynomial={polynomialA}/></p>
            <p> B = <Polynomial polynomial={polynomialB}/></p>
            <button onClick={this.handleReturnSum}> Sum! </button>
            {sum &&
            <p> A + B = <Result polynomial={sum}/></p>}
            </>
        )
    }
}

export default PolynomialCalculator;
