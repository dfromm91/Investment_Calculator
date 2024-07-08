import { calculateInvestmentResults } from "./util/investment";

export default function Table({
  duration,
  initialInvestment,
  annualInvestment,
  expectedReturn,
}) {
  function genRows() {
    const rows = calculateInvestmentResults({
      initialInvestment: parseInt(initialInvestment),
      annualInvestment: parseInt(annualInvestment),
      expectedReturn: parseInt(expectedReturn),
      duration: parseInt(duration),
    });
    let data = [];
    let totalInterest = 0;
    for (const row of rows) {
      totalInterest += row.interest;
      data.push(
        <tr>
          <td>{row.year}</td>
          <td>${Math.round(row.valueEndOfYear)}</td>
          <td>${Math.round(row.interest)}</td>
          <td>${Math.round(totalInterest)}</td>
          <td>${Math.round(row.valueEndOfYear - totalInterest)}</td>
        </tr>
      );
    }
    console.log(data);
    return data;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{[...genRows()]}</tbody>
    </table>
  );
}
