import { AddPolynominals } from "../components/AddPolynominals";

describe('AddPolynominals', () => {
    it('returns zero for zero polynominal',() =>
    expect(
        AddPolynominals([[0,0]],[[0,0]])).toEqual([[0,0]])
    )
    it('adds integer numbers',() =>
    expect(
        AddPolynominals([[0,2]],[[0,3]])).toEqual([[0,5]])
    )
    it('adds real numbers',() =>
    expect(
        AddPolynominals([[0,2.5]],[[0,3.125]])).toEqual([[0,5.625]])
    )
    it('adds polynominals first order',() =>
    expect(
        AddPolynominals([[1,2.5],[0,0]],[[1,3.125],[0,0.1]])).toEqual([[1,5.625],[0,0.1]])
    )
    it('works with missing argument for polynominals first order',() =>
    expect(
        AddPolynominals([[1,2.5]],[[1,3.125],[0,0.1]])).toEqual([[1,5.625],[0,0.1]])
    )
    it('adds polynominals higher order',() =>
    expect(
        AddPolynominals(
            [[1,2.5],[0,0],[2,1.3]],
            [[1,3.125],[0,0.1],[2,1.4]]
            )).toEqual([[1,5.625],[0,0.1],[2,2.7]])
    )
})
