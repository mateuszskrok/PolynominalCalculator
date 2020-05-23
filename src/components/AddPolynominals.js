export function AddPolynominals(polynominalA, polynominalB) {
    return polynominalA.map((pair) => {
        const same = polynominalB.find((pair2) => pair2[0] === pair[0]);
        polynominalB.filter((pair2) => pair2[0] !== pair[0]);
        if (same)
            return [pair[0], pair[1] + same[1]];
        else
            return [pair[0], pair[1]];
    });
}
