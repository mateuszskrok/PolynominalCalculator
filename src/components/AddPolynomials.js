export function AddPolynomials(polynomialA, polynomialB) {
    polynomialA.sort((a,b) => b[0]-a[0])
    polynomialB.sort((a,b) => b[0]-a[0])

    const concatenated = polynomialA.concat(polynomialB).sort((a,b) => b[0]-a[0]);
    const reduced = ReducePolynomial(concatenated);
    return reduced.filter((pair) => pair[0] !== null);
}

function ReducePolynomial(polynomial){
    const reduced = polynomial.reduce((a,b) => {  
        if (b[0]===a[a.length-1][0]){
            const lastVal = a.pop();
            a.push([b[0], lastVal[1] + b[1]]);
            return a;
        }
        else{
            a.push(b);
            return a;
        }    
        },[[null,null]])

    return reduced;
}