import { ReducePolynomial } from "./ReducePolynomial";

export function AddPolynomials(polynomialA, polynomialB) {
    polynomialA.sort((a,b) => b[0]-a[0])
    polynomialB.sort((a,b) => b[0]-a[0])

    const concatenated = polynomialA.concat(polynomialB).sort((a,b) => b[0]-a[0]);
    const reduced = ReducePolynomial(concatenated);
    return reduced.filter((pair) => pair[0] !== null);
}