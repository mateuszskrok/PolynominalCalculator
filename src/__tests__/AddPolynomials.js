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
    it('adds real numbers',() =>
    expect(
        AddPolynomials([[0,2.5]],[[0,3.125]])).toEqual([[0,5.625]])
    )
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
    it('adds polynomials of second order',() =>
    expect(
        AddPolynomials(
            [[1,2.5],[0,0],[2,1.3]],
            [[1,3.125],[0,0.1],[2,1.4]]
            )).toEqual([[2,2.7],[1,5.625],[0,0.1]])
    )
    it('adds polynomials of different orders',() =>
    expect(
        AddPolynomials(
            [[21,4.5],[1,2.5],[0,0],[2,1.3]],
            [[20.1,50],[1,3.125],[0,0.1],[2,1.4]]
            )).toEqual([[21,4.5],[20.1,50],[2,2.7],[1,5.625],[0,0.1]])
    )
})
