import React from 'react'

// CONSTANTS
import { YEARS, YEAR } from "../../constants";

// CSS
import "./LaunchYearFilter.css";

// COMPONENTS
import Button from "../Button";


export default function LaunchYearFilter() {
  const years = new Array(YEARS[1] - YEARS[0])
    .fill(YEARS[0])
    .map((year, i) => year + i);
  return (
    <div className="launch-year-filter">
      <h3>Launch year</h3>

      <hr />

      <div className="years-container">
        {years.map(year => {
          return (
            <Button
              data={`${year}`}
              key={year}
              filterType={YEAR}
            />
          )
        })}
      </div>
    </div>
  )
}
