import { AddPolynomials } from "../components/AddPolynomials";

describe('AddPolynomials', () => {
    it('returns zero for zero polynomial',() =>
    expect(
        AddPolynomials([[0,0]],[[0,0]])).toEqual([[0,0]])
    )
    it('adds integer numbers',() =>
    expect(
        AddPolynomials([[0,2]],[[0,3]])).toEqual([[0,5]])
    )
    it('works well for simple decimals',() =>
    expect(
        AddPolynomials([[0,2.5]],[[0,3.125]])).toEqual([[0,5.625]])
    )
    it('works well with decimals that are impossible to approximate',() => {
    const A = [
        [2, 2.12],
        [1, 0.1]
    ];
    const B =  [
        [2, 6],
        [1, 0.2]
    ];
    const sum =  AddPolynomials(A,B);
    expect(sum[0][1]).toBeCloseTo(8.12,5);
    expect(sum[1][1]).toBeCloseTo(0.3,5);
    })
    it('adds polynomials first order',() =>
    expect(
        AddPolynomials(
            [[1,2.5],[0,0]],
            [[1,3.125],[0,0.1]]
            )).toEqual([[1,5.625],[0,0.1]])
    )
    it('works with missing argument for polynomials first order',() =>
    expect(
        AddPolynomials([[1,2.5]],[[1,3.125],[0,0.1]])).toEqual([[1,5.625],[0,0.1]])
    )
    it('works with polynomials with one duplicate exponent',() =>
    expect(
        AddPolynomials(
            [[1,2],[1,1]],
            [[1,3],[0,2]]
            )).toEqual([[1,6],[0,2]])
    )
    it('works for polynomials with more than one duplicate exponent',() =>
    expect(
        AddPolynomials(
            [[1,2],[1,1],[1,4],[0,1]],
            [[1,3],[0,2],[0,3],[0,5]]
            )).toEqual([[1,10],[0,11]])
    )
    it('works for unsorted polynomials with more than one duplicate exponent',() =>
    expect(
        AddPolynomials(
            [[1,2],[0,1],[1,1],[1,4]],
            [[0,2],[0,3],[1,3],[0,5]],
            )).toEqual([[1,10],[0,11]])
    )
    it('adds polynomials of second order',() =>
    expect(
        AddPolynomials(
            [[1,2.5],[0,0],[2,1.3]],
            [[1,3.125],[0,0.1],[2,1.4]]
            )).toEqual([[2,2.7],[1,5.625],[0,0.1]])
    )
    it('adds polynomials with negative exponents',() =>
    expect(
        AddPolynomials(
            [[-1,5],[1,5],[0,4],[2,3]],
            [[-2,50],[1,3],[0,1],[2,4]]
            )).toEqual([[2,7],[1,8],[0,5],[-1,5],[-2,50]])
    )
})
