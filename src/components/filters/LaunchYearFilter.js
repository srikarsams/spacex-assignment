import React, { lazy, Suspense } from 'react'

// CONSTANTS
import { YEARS } from "../../constants";

// CSS
import "./LaunchYearFilter.css";

// COMPONENTS
const Button = lazy(() => import('../Button'));


export default function LaunchYearFilter({ setYear, activeYear }) {
  const years = new Array(YEARS[1] - YEARS[0])
    .fill(YEARS[0])
    .map((year, i) => year + i);
  return (
    <Suspense fallback={() => <p>Loading</p>}>
      <div className="launch-year-filter">
        <h3>Launch year</h3>

        <hr />

        <div className="years-container">
          {years.map(year => {
            return (
              <Button
                data={year}
                key={year}
                callback={setYear}
                activeData={activeYear}
              />
            )
          })}
        </div>
      </div>
    </Suspense>
  )
}
