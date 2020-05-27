import React from "react";
import { AddPolynomials } from "./AddPolynomials";
import Polynomial from "./Polynomial";
import { Result } from "./Result";

class PolynomialCalculator extends React.Component{

    state = {
       polynomials : [[
            [2,1],
            [1,1],
            [0,1]
        ],
        [
            [2,1],
            [1,1],
            [0,1]
         ]],
        sum : []
    }

     handleCoefficientChange = (pIndex, value, index) => {
        this.setState((prevState) =>{
            const updatedPolynomial = prevState.polynomials[pIndex].map((item, j) => {
                if (j===index){
                    return [item[0],value];
                }
                else {
                    return item;
                }
            }  
            )
            const newPolynomials = prevState.polynomials.map((polynomial,index) => {
                return (pIndex === index) ? updatedPolynomial : polynomial
            })
            return {polynomials: newPolynomials}
        })
    }
    
    handleExponentChange = (pIndex, value, index) => {
        this.setState((prevState) =>{
            const updatedPolynomial = prevState.polynomials[pIndex].map((item, j) => {
                if (j===index){
                    return [value,item[1]];
                }
                else {
                    return item;
                }
            }  
            )
            const newPolynomials = prevState.polynomials.map((polynomial,index) => {
                return (pIndex === index) ? updatedPolynomial : polynomial
            })
            return {polynomials: newPolynomials}
        })
    }

    handleAddTerm = (pIndex) => {
        this.setState((prevState) => {
            const updatedPolynomial = [...prevState.polynomials[pIndex], ...[[1,1]]]
            debugger
            const newPolynomials = prevState.polynomials.map((polynomial,index) => {
                return (pIndex === index) ? updatedPolynomial : polynomial
            })
            return {polynomials: newPolynomials}
        })
    }

    handleReturnSum = () => {
        this.setState(prevState => {
            return{sum: AddPolynomials(prevState.polynomials[0], prevState.polynomials[1])}
        })
    }

    render(){
        const {polynomials, sum} = this.state;
    
        return(
            <>
            <Polynomial 
                polynomial={polynomials[0]} 
                pIndex={0} 
                onCoefficientChange={this.handleCoefficientChange} 
                onExponentChange={this.handleExponentChange}
                onAddTerm={this.handleAddTerm}
            />
            <Polynomial 
                polynomial={polynomials[1]} 
                pIndex={1} 
                onCoefficientChange={this.handleCoefficientChange} 
                onExponentChange={this.handleExponentChange}
                onAddTerm={this.handleAddTerm}
                />
            <button onClick={this.handleReturnSum}> Sum! </button>
            {sum &&
            <p> A + B = <Result polynomial={sum}/></p>}
            </>
        )
    }
}

export default PolynomialCalculator;
