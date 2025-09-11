import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment';

const Results = ({ inputData }) => {
    const calculatedData = calculateInvestmentResults({
        initialInvestment: inputData.iniIvestment,
        annualInvestment: inputData.anuInvestment,
        expectedReturn: inputData.expReturn,
        duration: inputData.duration,
    })

    if (calculatedData.length === 0) {
        return <p className='center'>Invalid input data provided</p>
    }
    const initialInvestment =
        calculatedData[0].valueEndOfYear -
        calculatedData[0].interest -
        calculatedData[0].annualInvestment
    // const initialInvestment =
    //     calculatedData[0].valueEndOfYear -
    //     calculatedData[0].interest -
    //     calculatedData[0].annualInvestment
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year) </th>
                    <th>Total Interst</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {calculatedData.length && calculatedData.map((data, index) => {
                    const totalInterest =
                        data.valueEndOfYear -
                        data.annualInvestment * data.year -
                        initialInvestment
                    const totalAmountInvestment = data.valueEndOfYear - totalInterest;
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvestment)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Results