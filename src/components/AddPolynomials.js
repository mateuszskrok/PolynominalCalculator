export function AddPolynomials(polynomialA, polynomialB) {
    polynomialA.sort((a,b) => b[0]-a[0])
    polynomialB.sort((a,b) => b[0]-a[0])
    const subsum = polynomialA.map((pair) => {
        const same = polynomialB.find((pair2) => pair2[0] === pair[0]);
        polynomialB = polynomialB.filter((pair2) => pair2[0] !== pair[0]);
        
        if (same)
            return [pair[0], pair[1] + same[1]];
        else
            return [pair[0], pair[1]];
    });
    console.log(polynomialB);
    return subsum.concat(polynomialB).sort((a,b) => b[0]-a[0]);
}
